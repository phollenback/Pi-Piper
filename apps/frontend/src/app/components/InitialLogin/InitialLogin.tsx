"use client";

import React, { useState } from "react";
import Button from "../Elements/Button";
import { useRouter } from "next/navigation";
import RadioButton from "../Elements/login/RadioButton";

// InitialLogin component: presents buttons for PrepList and Manager login options.
const InitialLogin: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false); // State for "Stay Signed In" checkbox.

  const router = useRouter();

  // Navigates to the PrepList dashboard.
  const handleListClick = () => {
    router.push("/prep-dash");
  };

  // Navigates to the Manager login page.
  const handleManagerClick = () => {
    router.push("/manager/login");
  };

  // Toggles the isChecked state for the "Stay Signed In" checkbox.
  const handleRadioChange = () => {
    setIsChecked((prev) => !prev); 
  };


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