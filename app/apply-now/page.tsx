"use client"

import ApplyNowEight from "@/components/apply-now/apply-now-eight";
import ApplyNowFive from "@/components/apply-now/apply-now-five";
import ApplyNowFour from "@/components/apply-now/apply-now-four";
import ApplyNowNine from "@/components/apply-now/apply-now-nine";
import ApplyNowOne from "@/components/apply-now/apply-now-one";
import ApplyNowSeven from "@/components/apply-now/apply-now-seven";
import ApplyNowSix from "@/components/apply-now/apply-now-six";
import ApplyNowThree from "@/components/apply-now/apply-now-three";
import ApplyNowTwo from "@/components/apply-now/apply-now-two";
import { Button } from "@/components/ui/button";

import ProgressCircle from "@/components/ui/progress-circle";

import { useMultistepForm } from "@/lib/useMultistepForm";

import { FormEvent, useState } from "react";

type ApplicationFormData = {
  isVip: boolean;
  firstName: string;
  age: number;
  location: string;
  socialMedia: string;
  onlyFansAccountLink: string;
  contactInfo: string;
  isCalendlyBooked: boolean;
  message: string;
};
const INITIAL_DATA: ApplicationFormData = {
  isVip: false,
  firstName: "",
  age: 18,
  location: "",
  socialMedia: "",
  onlyFansAccountLink: "",
  contactInfo: "",
  isCalendlyBooked: false,
  message: "",
};

const ApplyNow = () => {
  const [applicationFormData, setApplicationFormData] = useState(INITIAL_DATA);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    next();
    console.log("submit");
  };
  const updateField = (fields: Partial<ApplicationFormData>) => {
    setApplicationFormData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const { step, isFirstStep, isLastStep, steps, currentStepIndex, back, next } = useMultistepForm([
      <ApplyNowOne {...applicationFormData} updateField={updateField} />,
      <ApplyNowTwo {...applicationFormData} updateField={updateField} />,
      <ApplyNowThree {...applicationFormData} updateField={updateField} />,
      <ApplyNowFour {...applicationFormData} updateField={updateField} />,
      <ApplyNowFive {...applicationFormData} updateField={updateField} />,
      <ApplyNowSix {...applicationFormData} updateField={updateField} />,
      <ApplyNowSeven {...applicationFormData} updateField={updateField} />,
      <ApplyNowEight {...applicationFormData} updateField={updateField} />,
      <ApplyNowNine {...applicationFormData} updateField={updateField} />,
  ]);

  return (
    <div className="w-full bg-primary-black -mt-[92px]">
      <div className="container py-[92px] mx-auto">
        <form
          onSubmit={onSubmit}
          name="application"
          method="POST"
          className="relative"
        >
          <div className="absolute top-0 right-0 flex items-center pt-[50px] md:pt-[152px] pr-6">
            <ProgressCircle progress={currentStepIndex + 1}/>
            <p className="text-white text-form-text">{currentStepIndex + 1}/{steps.length}</p>
          </div>
          {step}
          <div className="flex items-center justify-between">
            {!isFirstStep && (
              <Button onClick={back} type="button" variant="ghost">
                Previous
              </Button>
            )}
            <Button
              onClick={isLastStep ? () => {} : next}
              type={isLastStep ? "button" : "button"}
              variant="default"
            >
              {isLastStep ? "Finish" : "Next"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyNow;
