"use client";
import React, { Suspense } from "react";
import LoginPage  from "../components/Loginpage/LoginPage";

const Page = () => {

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
      <LoginPage />
      </Suspense>
    </div>
  );
};


export default Page;
