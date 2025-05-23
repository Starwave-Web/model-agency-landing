type ApplyNowEight = {
  message: string;
};

type ApplyNowEightProps = ApplyNowEight & {
  updateField: (field: ApplyNowEight) => void;
};

const ApplyNowEight = ({ message, updateField }: ApplyNowEightProps) => {
  return (
    <section className="w-full h-[70vh] bg-primary-black">
      <div className="container mx-auto flex flex-col gap-16 px-6 pt-[146px]">
        <div className="flex items-center justify-between">
          <h1 className="text-white text-h3-mobile md:text-h3 w-full md:w-3/4">
            8. Tell us about yourself, as much or as little as you want!
          </h1>
        </div>
        <div className="flex flex-col gap-2">
          <input
            value={message}
            onChange={(e) => updateField({ message: e.target.value })}
            placeholder="Message"
            className="bg-transparent text-white !text-form-text !border-b-[2px] !border-b-white w-full border-t-0 border-x-0 rounded-none"
          />
          <p className="text-white text-description">*Optional</p>
        </div>
      </div>
    </section>
  );
};

export default ApplyNowEight;
