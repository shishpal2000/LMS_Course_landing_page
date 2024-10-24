"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { postData } from "../../apiCollection/apiCalling";
import { show_notification } from "../../apiCollection/notification";

export default function PaymentSuccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isVerified, setIsVerified] = useState(false); // State to track if payment is verified
  const [notificationShown, setNotificationShown] = useState(false); // State to track if notification has been shown

  const razorpay_payment_id = searchParams.get("razorpay_payment_id");
  const razorpay_order_id = searchParams.get("razorpay_order_id");
  const razorpay_signature = searchParams.get("razorpay_signature");
  const event_purchase_id = searchParams.get("event_purchase_id");
  const event_id = searchParams.get("event_id");

  useEffect(() => {
    const verifyPayment = async () => {
      // Only proceed if payment hasn't been verified yet
      if (isVerified) return;

      if (razorpay_payment_id && razorpay_order_id && razorpay_signature) {
        const payload = {
          razorPay_order_id: razorpay_order_id,
          razorpay_payment_id: razorpay_payment_id,
          razorpay_signature: razorpay_signature,
          event_purchase_id: event_purchase_id,
          event_id: event_id,
        };

        try {
          const res = await postData("event/enroll/verify-event-enrollment", payload);
          if (res?.success) { // Check for success
            if (!notificationShown) {
              show_notification("Payment verified successfully!", "success");
              setNotificationShown(true); // Mark notification as shown
            }
            setIsVerified(true); // Mark as verified
            router.push("/"); // Redirect to a success page or dashboard
          } else {
            if (!notificationShown) {
              show_notification("Payment verification failed: " + res?.message, "error");
              setNotificationShown(true); // Mark notification as shown
            }
            router.push("/paymentFail");
          }
        } catch (error) {
          console.error("Error verifying payment:", error);
          if (!notificationShown) {
            show_notification("Error verifying payment", "error");
            setNotificationShown(true); // Mark notification as shown
          }
          router.push("/");
        }
      } else {
        if (!notificationShown) {
          show_notification("Missing payment information.", "error");
          setNotificationShown(true); // Mark notification as shown
        }
        router.push("/");
      }
    };

    verifyPayment();
  }, [isVerified, razorpay_payment_id, razorpay_order_id, razorpay_signature, event_purchase_id, event_id, router, notificationShown]); // Ensure dependencies are correct

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full text-center p-10 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Processing Payment...
        </h2>
      </div>
    </div>
  );
}
