import { toast } from 'react-toastify';

// Define the notification function
export const show_notification = (message, type, duration = 3000) => {
  // Use `toast` from `react-toastify` to show notifications
  toast(message, {
    type: type || 'default', // Type can be 'success', 'error', 'info', 'warning', or 'default'
    autoClose: duration, // Duration in milliseconds
    position: 'top-right', // Position of the notification
    theme: 'light', // or 'dark'
    hideProgressBar: false,
    closeButton: true,
    pauseOnHover: true,
    draggable: true,
  });
};
