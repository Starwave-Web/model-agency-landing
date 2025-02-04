type ApplyNowThree = {
  age: number;
};

type ApplyNowThreeProps = ApplyNowThree & {
  updateField: (field: ApplyNowThree) => void;
};

const ApplyNowThree = ({ age, updateField }: ApplyNowThreeProps) => {
  return (
    <section className="w-full h-[70vh] bg-primary-black">
      <div className="container mx-auto flex flex-col gap-16 px-6 pt-[146px]">
        <div className="flex items-center justify-between">
          <h1 className="text-white text-h3-mobile md:text-h3 w-full md:w-3/4">
            3. How old are you?
          </h1>
        </div>
        <input
          autoFocus
          required
          type="number"
          min={18}
          max={99}
          value={age}
          onChange={(e) =>
            updateField({ age: e.target.value as unknown as number })
          }
          placeholder="Age"
          className="bg-transparent text-white !text-form-text !border-b-[2px] !border-b-white w-full border-t-0 border-x-0 rounded-none"
        />
      </div>
    </section>
  );
};

export default ApplyNowThree;
