"use client";
import React, { useEffect, useState , Suspense } from "react";
import dynamic from 'next/dynamic';
import Paymentsuccessfull  from '../components/Paymentsuccessfull/PaymentSucessFull';

const Page = () => {
  
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
      <Paymentsuccessfull />
      </Suspense>
    </div>
  );
};

export default Page;





















// "use client";
// import React, { useEffect } from "react";
// import { show_notification } from "../apiCollection/notification";
// import { useSearchParams } from "next/navigation";
// import { postData } from "../apiCollection/apiCalling";

// interface OtpVerify {
//   razorPay_order_id: string | null;
//   razorpay_payment_id: string | null;
//   razorpay_signature: string | null;
//   event_purchase_id: string | null;
//   event_id: string | null;
// }

// const Page = () => {
//   const searchParams = useSearchParams();
//   const razorPay_order_id = searchParams.get("razorPay_order_id");
//   const razorpay_payment_id = searchParams.get("razorpay_payment_id");
//   const razorpay_signature = searchParams.get("razorpay_signature");
//   const event_purchase_id = searchParams.get("event_purchase_id");
//   const event_id = searchParams.get("event_id");

//   useEffect(() => {
//     const verifyPayment = async () => {
//       const payload: OtpVerify = {
//         razorPay_order_id,
//         razorpay_payment_id,
//         razorpay_signature,
//         event_purchase_id,
//         event_id,
//       };

//       const apiCall = await postData("event/enroll/verify-event-enrollment", payload);

//       if (apiCall) {
//         if (apiCall.success) {
//           show_notification("Payment successful!", "success");
//         } else {
//           show_notification("Error", apiCall.message);
//         }
//       }
//     };

//     verifyPayment();
//   }, [razorPay_order_id, razorpay_payment_id, razorpay_signature, event_purchase_id, event_id]); // Dependencies array

//   return (
//     <div>
//       <h1>Payment successful</h1>
//     </div>
//   );
// };

// export default Page;
