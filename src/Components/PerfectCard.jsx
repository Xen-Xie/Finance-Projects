import React from "react";
import { Button } from "@heroui/react";

function PerfectCard() {
  return (
    <section className="flex flex-col sm:flex-row  gap-10 lg:gap-8 justify-between items-center">
      <img src="Group 14.svg" alt="" className="sm:w-1/2 mt-10 sm:mt-0" />
      <div className="space-y-3 md:space-y-6 sm:w-1/2">
        <h2 className="font-bold leading-tight text-2xl md:text-4xl">
          Find the Perfect Card for You
        </h2>
        <p className="text-secondary text-md lg:text-base w-full max-w-[550px]">
          Unlocking the Power of Crypto, Both Virtually and Physically Manage
          your crypto effortlessly and spend it seamlessly with Wern. Our
          virtual card allows for instant and secure online transactions, while
          the physical Wern Card empowers you to convert and spend your crypto
          at millions of merchants worldwide. Experience the flexibility and
          convenience of both options, all within the secure and user-friendly
          Wern ecosystem.
        </p>
        <div className="space-y-2">
          <Button
            variant="solid"
            radius="full"
            size="lg"
            color="primary"
            className="font-bold text-sm"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}

export default PerfectCard;
