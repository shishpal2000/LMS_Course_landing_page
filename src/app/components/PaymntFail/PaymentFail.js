"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { show_notification } from "../../apiCollection/notification";

const PaymentFail = () => {
  const router = useRouter();

  useEffect(() => {
    show_notification("Payment Failed", "error");

    // Set a timeout to redirect after 2 seconds
    const timeoutId = setTimeout(() => {
      router.push("/");  
    }, 2000);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, [router]); 

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full text-center p-10 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Payment Failed
        </h2>
      </div>
    </div>
  );
};

export default PaymentFail;
