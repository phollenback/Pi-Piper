"use client";

import React, { useState, useEffect } from "react";
import Button from "../Elements/Button";
import { useRouter } from "next/navigation";
import RadioButton from "../Elements/login/RadioButton";

const InitialLogin: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const router = useRouter();

  const handleListClick = () => {
    router.push("/prep-dash");
  };

  const handleManagerClick = () => {
    router.push("/manager/login");
  };

  const handleRadioChange = () => {
    setIsChecked((prev) => !prev); // Toggle the `isChecked` state
  };

  // Log state changes
  useEffect(() => {
    console.log("isChecked state changed:", isChecked);
  }, [isChecked]); // Dependency array ensures this runs only when isChecked changes

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex gap-8">
        <Button
          label="PrepList"
          onClick={handleListClick}
          size="medium"
        />
        <Button
          label="Manager"
          onClick={handleManagerClick}
          size="medium"
        />
      </div>
      <div className="flex gap-8">
        <RadioButton
          label="Stay Signed In?"
          onChange={handleRadioChange}
          checked={isChecked}
          size="medium"
        />
      </div>
    </div>
  );
};

export default InitialLogin;