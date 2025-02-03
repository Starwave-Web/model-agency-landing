"use client";

import ApplyNowTemplate from "@/components/apply-now/apply-now-template";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import ProgressCircle from "@/components/ui/progress-circle";
import { useToast } from "@/hooks/use-toast";
import { useMultistepForm } from "@/lib/useMultistepForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type ApplicationFormData = {
  botField: string;
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
  botField: "",
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
  const [, setApplicationFormData] = useState(INITIAL_DATA);

  const formSteps = [
    {
      key: "1",

      fieldName: "isVip",
      title: "1. VIP program",
      label:
        "If you're not at $10,000 leave this blank, we will get you there soon enough",
      optional: true,
    },
    {
      key: "2",

      fieldName: "firstName",
      title: "2. What's your first name?",
      fieldPlaceholder: "First name",
    },
    {
      key: "3",

      fieldName: "age",
      title: "3. How old are you?",
      fieldPlaceholder: "Age",
    },
    {
      key: "4",

      fieldName: "location",
      title: "4. Where are you located?",
      fieldPlaceholder: "Location",
    },
    {
      key: "5",

      fieldName: "socialMedia",
      title: "5. Where can we find you on social media?",
      fieldPlaceholder: "Instagram",
    },
    {
      key: "6",

      fieldName: "onlyFansLink",
      title:
        "6. Do you currently have an OnlyFans account? If so, please enter your link below.",
      fieldPlaceholder: "OnlyFans link",
      optional: true,
    },
    {
      key: "7",

      fieldName: "phoneNumber",
      title: "7. How can we get in contact with you?",
      fieldPlaceholder: "Phone number",
    },
    {
      key: "8",

      fieldName: "isBookedCalendly",
      title: "8. For a quicker start, book a call with us here!",
      optional: true,
    },
    {
      key: "9",

      fieldName: "message",
      title: "9. Tell us about yourself, as much or as little as you want!",
      fieldPlaceholder: "Message",
      optional: true,
    },
  ];

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    next();
    console.log("submit");
  };
  const updateFields = (fields: Partial<ApplicationFormData>) => {
    setApplicationFormData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const { step, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <ApplyNowTemplate {...formSteps[0]} updateFields={updateFields} />,
    <ApplyNowTemplate {...formSteps[1]} updateFields={updateFields} />,
    <ApplyNowTemplate {...formSteps[2]} updateFields={updateFields} />,
    <ApplyNowTemplate {...formSteps[3]} updateFields={updateFields} />,
    <ApplyNowTemplate {...formSteps[4]} updateFields={updateFields} />,
    <ApplyNowTemplate {...formSteps[5]} updateFields={updateFields} />,
    <ApplyNowTemplate {...formSteps[6]} updateFields={updateFields} />,
    <ApplyNowTemplate {...formSteps[7]} updateFields={updateFields} />,
    <ApplyNowTemplate {...formSteps[8]} updateFields={updateFields} />,
  ]);

  return (
    <div className="w-full bg-primary-black -mt-[92px]">
      <div className="container py-[92px] px-6 mx-auto">
        <form
          onSubmit={onSubmit}
          name="application"
          method="POST"
          className="relative"
        >
          <div className="absolute top-0 right-0 flex items-center pt-[50px] md:pt-[152px] pr-6">
            <ProgressCircle progress={0} />
            <p className="text-white text-form-text">1/9</p>
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
              type={isLastStep ? "submit" : "button"}
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
