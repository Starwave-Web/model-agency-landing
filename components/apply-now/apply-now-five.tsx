type ApplyNowFive = {
  socialMedia: string;
};

type ApplyNowFiveProps = ApplyNowFive & {
  updateField: (field: ApplyNowFive) => void;
};

const ApplyNowFive = ({ socialMedia, updateField }: ApplyNowFiveProps) => {
  return (
    <section className="w-full h-[70vh] bg-primary-black">
      <div className="container mx-auto flex flex-col gap-16 px-6 pt-[146px]">
        <div className="flex items-center justify-between">
          <h1 className="text-white text-h3-mobile md:text-h3 w-full md:w-3/4">
            5. Where can we find you on social media?
          </h1>
        </div>
        <input
          value={socialMedia}
          onChange={(e) => updateField({ socialMedia: e.target.value })}
          placeholder="Instagram"
          className="bg-transparent text-white !text-form-text !border-b-[2px] !border-b-white w-full border-t-0 border-x-0 rounded-none"
        />
      </div>
    </section>
  );
};

export default ApplyNowFive;
