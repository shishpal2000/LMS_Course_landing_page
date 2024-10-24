"use client";
import React, {Suspense } from "react";
import PaymentFail from '../components/PaymntFail/PaymentFail';

const Page = () => {
  
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
      <PaymentFail />
      </Suspense>
    </div>
  );
};

export default Page;
