type ApplyNowFour = {
  location: string;
};

type ApplyNowFourProps = ApplyNowFour & {
  updateField: (field: ApplyNowFour) => void;
};

const ApplyNowFour = ({ location, updateField }: ApplyNowFourProps) => {
  return (
    <section className="w-full h-[70vh] bg-primary-black">
      <div className="container mx-auto flex flex-col gap-16 px-6 pt-[146px]">
        <div className="flex items-center justify-between">
          <h1 className="text-white text-h3-mobile md:text-h3 w-full md:w-3/4">
            4. Where are you located?
          </h1>
        </div>
        <input
          autoFocus
          required
          type="text"
          value={location}
          onChange={(e) => updateField({ location: e.target.value })}
          placeholder="Location"
          className="bg-transparent text-white !text-form-text !border-b-[2px] !border-b-white w-full border-t-0 border-x-0 rounded-none"
        />
      </div>
    </section>
  );
};

export default ApplyNowFour;
