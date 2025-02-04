// import React, { ReactElement } from "react";
// import { Input } from "../ui/input";
// import {
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "../ui/form";

// type ApplyNowTemplateType = {
//   form: any;
//   fieldName: string;
//   title: string;
//   label?: string;
//   fieldPlaceholder?: string;
//   optional?: boolean;
// };

// type ApplyNowTemplateProps = ApplyNowTemplateType & {
//   updateFields: (fields: Partial<ApplicationFormSchema>) => void;
// };

// const ApplyNowTemplate = ({
//   fieldName,
//   title,
//   label,
//   fieldPlaceholder,
//   optional = false,
//   updateFields,
// }: ApplyNowTemplateProps) => {
//   return (
//     <section className="w-full h-[70vh] bg-primary-black">
//       <div className="container mx-auto flex flex-col gap-16 px-6 pt-[146px]">
//       <div className="flex items-center justify-between">
//           <h1 className="text-white text-h3-mobile md:text-h3">{title}</h1>
//         </div>
//         {fieldName === "isVip" ? (
//           <div className="flex flex-col gap-8 md:gap-10 items-start">
//             <div className="flex flex-col items-start gap-4 md:gap-[33px]">
//               <label className="!text-form-text">{label}</label>
//               <input
//                 value={value}
//                 type="checkbox"
//                 onChange={(e) =>
//                   updateFields({ [fieldName]: e.target.checked })
//                 }
//                 className="w-[25px] h-[25px] accent-[#3D3F43] rounded-[4px] shadow-inner bg-[#3D3F43]"
//               />
//               <p className="text-white text-form-text">
//                 If you're not at $10,000 leave this blank, we will get you there
//                 soon enough
//               </p>
//             </div>
//           </div>
//         ) : (
//                   <input
//                     value={isVip}
//                     placeholder={fieldPlaceholder}
//                     className="bg-transparent text-white !text-form-text !border-b-[2px] !border-b-white w-full border-t-0 border-x-0 rounded-none"
//                   />
//                   {optional && (
//                     <p className="text-white text-description">*Optional</p>
//                   )}
//             )}
//         </div>
//     </section>
//   );
// };

// export default ApplyNowTemplate;
