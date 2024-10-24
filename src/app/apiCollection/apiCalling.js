import axios from 'axios';
import { show_notification } from '../apiCollection/notification';
import axiosRetry from 'axios-retry';

const BaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

axiosRetry(axios, { retries: 3, retryDelay: axiosRetry.exponentialDelay });

// Utility function to get the authorization token from localStorage (client-side) or from cookies (server-side)
const getToken = () => {
  if (typeof window !== 'undefined') {
    return `Bearer ${localStorage.getItem('token')}`;
  } else {
    // This is for server-side, retrieve the token from cookies or other secure storage
    // Example: return `Bearer ${req.cookies.token}`;
    return ''; 
  }
};

export const removeToken = () => {
  if (typeof window !== 'undefined') {
    // Remove from localStorage
    localStorage.removeItem(TOKEN_KEY);

    // Remove from cookies
    Cookies.remove(COOKIE_KEY);
  }
};

export const getData = async (endpoint) => {
  try {
    const config = {
      headers: {
        Authorization: getToken(),
      },
      timeout: 10000,
    };
    const response = await axios.get(`${BaseUrl}/${endpoint}`, config);
    return response?.data;
  } catch (e) {
    if (e.code === 'ECONNABORTED') {
      const errorMessage = 'The request took too long and timed out. Please try again later.';
      if (typeof window !== 'undefined') show_notification(errorMessage, 'warning');
    } else {
      const errorMessage = e?.response?.data?.message || 'An error occurred while fetching data';
      if (typeof window !== 'undefined') show_notification( errorMessage, 'warning');
    }
    throw e;
  }
};


// Function to handle POST requests
export const postData = async (endpoint, payload, isFormData = false) => {
  try {
    const config = {
      headers: {
        Authorization: getToken(),
        'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
      },
      timeout: 10000,
    };
    
    const response = await axios.post(`${BaseUrl}/${endpoint}`, payload, config);
    
    
    return response?.data;
  } catch (e) {
    const errorMessage = e?.response?.data?.message || 'An error occurred while submitting data';
    
    if (typeof window !== 'undefined') {
      show_notification('Failed!', errorMessage, 'warning');
    }
    
    throw e;
  }
};


// Function to handle PUT requests
export const updateData = async (endpoint, payload) => {
  try {
    const config = {
      headers: {
        Authorization: getToken(),
        'Content-Type': 'application/json',
      },
      timeout: 10000,
    };
    const response = await axios.put(`${BaseUrl}/${endpoint}`, payload, config);
    return response?.data;
  } catch (e) {
    const errorMessage = e?.response?.data?.message || 'An error occurred while updating data';
    if (typeof window !== 'undefined') show_notification(errorMessage, 'warning');
    throw e;
  }
};

// Function to handle DELETE requests
export const deleteData = async (endpoint) => {
  try {
    const config = {
      headers: {
        Authorization: getToken(),
      },
      timeout: 10000,
    };
    const response = await axios.delete(`${BaseUrl}/${endpoint}`, config);
    return response?.data;
  } catch (e) {
    const errorMessage = e?.response?.data?.message || 'An error occurred while deleting data';
    if (typeof window !== 'undefined') show_notification(errorMessage, 'warning');
    throw e;
  }
};
