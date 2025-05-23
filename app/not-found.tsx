"use client";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className=" flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/images/logo.png"
        alt={`${APP_NAME}`}
        height={48}
        width={48}
        priority={true}
      />
      <div className=" p-6 rounded-lg shadow-md text-center">
        <h1 className=" text-3xl font-bold m-4">Page Not Found!</h1>
        <p className=" text-destructive">Could not find requisete page.</p>
        <Button
          className=" mt-4 ml-2"
          onClick={() => (window.location.href = "/")}
        >
          Back to the home page
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
