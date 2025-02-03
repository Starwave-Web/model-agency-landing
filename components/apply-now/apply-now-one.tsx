import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";


const ApplyNowOne = ({
  form,
  fieldName,
  title,
  label,
}: {
  form: any;
  fieldName: string
  title: string;
  label?: string;
  fieldPlaceholder?: string;
  optional?: boolean;
}) => {
  return (
    <section className="w-full h-[70vh] bg-primary-black">
      <div className="container mx-auto flex flex-col gap-16 px-6 pt-[146px]">
        <div className="flex items-center justify-between">
          <h1 className="text-white text-h3-mobile md:text-h3">{title}</h1>
        </div>
        <div className="flex flex-col gap-8 md:gap-10 items-start">
          <div className="flex flex-col items-start gap-4 md:gap-[33px]">
            <FormField
              control={form.control}
              name={fieldName}
              render={({ field }) => (
                <FormItem className="text-white flex flex-row-reverse gap-6">
                  <FormLabel className="!text-form-text">{label}</FormLabel>
                  <FormControl>
                      <Input
                        {...field}
                        type="checkbox"
                        className="w-[25px] h-[25px] accent-[#3D3F43] rounded-[4px] shadow-inner bg-[#3D3F43]"
                      />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <p className="text-white text-form-text">
              If you're not at $10,000 leave this blank, we will get you there
              soon enough
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyNowOne;
