"use client";
import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { HiMinusSmall } from "react-icons/hi2";
import Loder from "../loder/Loder";
import { show_notification } from "../apiCollection/notification";
import { postData } from "../apiCollection/apiCalling";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FAQs = ({faq}) => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [loading, setLoading] = useState(false);

  // Validation schema for form
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    number: Yup.string()
      .matches(/^[0-9]+$/, "Mobile number must be digits")
      .required("Mobile number is required"),
    query: Yup.string().required("Query is required"),
  });

  // Form submission handler
  const handleSubmit = async (values, { resetForm }) => {
    // console.log("Payload before sending:", {
    //   name: values.name,
    //   email: values.email,
    //   phone: values.number,
    //   query: values.query,
    // });    
    setLoading(true);
    try {
      const payload = {
        name: values.name,
        email: values.email,
        phone: values.number,
        query: values.query,
      };

      const response = await postData(`connect-with-us/submit`, payload);
      // console.log("response:",response);

      if (response.success) {
        show_notification("Query submitted successfully", "success");
        resetForm();
      } else {
        show_notification("Failed to submit query", "error");
      }
    } catch (error) {

      show_notification("Error submitting query", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="w-full flex flex-col items-center gap-5">
        <p className="text-gray-700 text-3xl lg:text-4xl xl:text-5xl font-semibold text-center md:text-start">
          {faq.title}
        </p>
        <p className="text-xs md:text-sm lg:text-base xl:text-lg text-gray-600 text-center md:w-[50%]">
          {faq.description}
        </p>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
  {/* FAQ Section */}
  <div>
    {faq.content.length > 0 ? (
      faq.content.map((item, index) => (
        <div key={index} className="flex flex-col gap-4 mb-4 text-gray-700"> {/* Adjusted gap and margin */}
          <div className="w-full p-[5%] bg-gray-100 rounded-md flex justify-between">
            <div className="w-[80%]">
              <p className="text-sm lg:text-base xl:text-xl">
                {item.question}
              </p>
              {openFAQ === index && (
                <p className="text-gray-400 text-[10px] lg:text-xs xl:text-sm">
                  {item.answer}
                </p>
              )}
            </div>
            <div
              className={`lg:text-xl xl:text-2xl p-1 h-fit rounded-full ${
                openFAQ === index ? "bg-[#525FE1] text-white" : "bg-purple-100"
              }`}
              onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
            >
              {openFAQ === index ? <HiMinusSmall /> : <GoPlus />}
            </div>
          </div>
        </div>
      ))
    ) : (
      <div>No FAQ content available</div>
    )}
  </div>

  {/* Formik Form Section */}
  <div>
    <Formik
      initialValues={{ name: "", email: "", number: "", query: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="text-gray-700 w-full flex flex-col p-[3%] gap-3 bg-gray-100 rounded-md h-fit  md:md-10 lg:mb-0">
          <p className="font-semibold text-base xl:text-xl py-2">
            ASK YOUR QUESTION
          </p>
          <hr />
          <div className="w-full flex flex-col gap-1">
            <p className="text-xs lg:text-sm xl:text-base ">Name</p>
            <Field
              name="name"
              type="text"
              placeholder="Enter your name ..."
              className="p-3 text-[10px] lg:text-xs xl:text-sm"
            />
            <ErrorMessage name="name" component="div" className="text-red-500 text-xs" />
          </div>
          <div className="w-full flex flex-col gap-1">
            <p className="text-xs lg:text-xs xl:text-sm">Email</p>
            <Field
              name="email"
              type="text"
              placeholder="Enter your email ..."
              className="p-3 text-[10px] lg:text-xs xl:text-sm"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />
          </div>
          <div className="w-full flex flex-col gap-1">
            <p className="text-xs lg:text-xs xl:text-sm">Mobile Number</p>
            <Field
              name="number"
              type="text"
              placeholder="Enter your mobile number ..."
              className="p-3 text-[10px] lg:text-xs xl:text-sm"
            />
            <ErrorMessage name="number" component="div" className="text-red-500 text-xs" />
          </div>
          <div className="w-full flex flex-col gap-1">
            <p className="text-xs lg:text-xs xl:text-sm">Enter Your Query</p>
            <Field
              name="query"
              type="text"
              placeholder="Enter your query at least 10 characters"
              className="p-3 text-[10px] lg:text-xs xl:text-sm"
            />
            <ErrorMessage name="query" component="div" className="text-red-500 text-xs" />
          </div>

          <button
            type="submit"
            disabled={isSubmitting || loading}
            className="w-full rounded bg-[#525FE1] text-white py-2 xl:py-3 text-xs mt-1"
          >
            {loading ? (
              <div className="spinner">
                <Loder />
                <span>Submitting...</span>
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </Form>
      )}
    </Formik>
  </div>
</div>


      </div>
    </div>
  );
};

export default FAQs;
