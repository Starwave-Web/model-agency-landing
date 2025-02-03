"use client";

import ApplyNowTemplate from "@/components/apply-now/apply-now-template";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import ProgressCircle from "@/components/ui/progress-circle";
import { useToast } from "@/hooks/use-toast";
import { useMultistepForm } from "@/lib/useMultistepForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// export type applicationFormType = {
//   message: string;
//   "form-name": string;
//   subject: string;
//   firstName: string;
//   age: number;
//   location: string;
//   socialMedia: string;
//   phoneNumber: string;
//   "bot-field"?: string | undefined;
//   isVip?: boolean | undefined;
//   onlyFansLink?: string | undefined;
//   isBookedCalendly?: boolean | undefined;
// };

const formSchema = z.object({
  "form-name": z.string().default("application"),
  "bot-field": z.string().optional(),
  subject: z.string().default("New Application Submitted"),
  isVip: z.boolean().optional(), // optional is a maybe
  firstName: z
    .string()
    .min(1, { message: "This field is required" })
    .max(50, { message: "Character limit exceeded" }),
  age: z
    .number()
    .min(1, { message: "This field is required" })
    .max(2, { message: "Character limit exceeded" }),
  location: z
    .string()
    .min(1, { message: "This field is required" })
    .max(50, { message: "Character limit exceeded" }),
  socialMedia: z
    .string()
    .min(1, { message: "This field is required" })
    .max(500, { message: "Character limit exceeded" }),
  onlyFansLink: z
    .string()
    .min(1, { message: "This field is required" })
    .max(500, { message: "Character limit exceeded" })
    .optional(),
  phoneNumber: z
    .string()
    .min(1, { message: "This field is required" })
    .max(50, { message: "Character limit exceeded" }),
  isBookedCalendly: z.boolean().optional(), // optional is a maybe
  message: z
    .string()
    .min(1, { message: "This field is required" })
    .max(5000, { message: "Character limit exceeded" }),
});

export type ApplicationFormSchema = z.infer<typeof formSchema>;

const ApplyNow = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      "form-name": "application",
      "bot-field": "",
      subject: "New Application Submitted",
      isVip: false,
      firstName: "",
      age: 18,
      location: "",
      socialMedia: "",
      onlyFansLink: "",
      phoneNumber: "",
      isBookedCalendly: false,
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const formData = new FormData();
      for (const key in values) {
        if (values.hasOwnProperty(key)) {
          const value = values[key as keyof typeof values] ?? "";
          formData.append(key, value.toString());
        }
      }
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        // It was: (formData as any) for future reference
        body: new URLSearchParams(
          formData as unknown as Record<string, string>
        ).toString(),
      });
      if (res.status === 200) {
        form.reset();
        toast({
          title: "Message sent successfully!",
          description: "We will get in touch with you soon!",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Something went wrong.",
          description: "Please try again.",
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Something went wrong.",
        description: "Please try again.",
      });
    }
  };

  const updateFields = (fields: Partial<ApplicationFormSchema>) => {
    setApplicationFormData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const formSteps = [
    {
      key: "1",
      form: form,
      fieldName: "isVip",
      title: "1. VIP program",
      label:
        "If you're not at $10,000 leave this blank, we will get you there soon enough",
      optional: true,
    },
    {
      key: "2",
      form: form,
      fieldName: "firstName",
      title: "2. What's your first name?",
      fieldPlaceholder: "First name",
    },
    {
      key: "3",
      form: form,
      fieldName: "age",
      title: "3. How old are you?",
      fieldPlaceholder: "Age",
    },
    {
      key: "4",
      form: form,
      fieldName: "location",
      title: "4. Where are you located?",
      fieldPlaceholder: "Location",
    },
    {
      key: "5",
      form: form,
      fieldName: "socialMedia",
      title: "5. Where can we find you on social media?",
      fieldPlaceholder: "Instagram",
    },
    {
      key: "6",
      form: form,
      fieldName: "onlyFansLink",
      title:
        "6. Do you currently have an OnlyFans account? If so, please enter your link below.",
      fieldPlaceholder: "OnlyFans link",
      optional: true,
    },
    {
      key: "7",
      form: form,
      fieldName: "phoneNumber",
      title: "7. How can we get in contact with you?",
      fieldPlaceholder: "Phone number",
    },
    {
      key: "8",
      form: form,
      fieldName: "isBookedCalendly",
      title: "8. For a quicker start, book a call with us here!",
      optional: true,
    },
    {
      key: "9",
      form: form,
      fieldName: "message",
      title: "9. Tell us about yourself, as much or as little as you want!",
      fieldPlaceholder: "Message",
      optional: true,
    },
  ];
  const [, setApplicationFormData] = useState(form.control._defaultValues);

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
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
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
        </Form>
      </div>
    </div>
  );
};

export default ApplyNow;
