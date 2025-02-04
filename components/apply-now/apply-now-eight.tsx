import CalendlyEmbed from "./calendly-embed";

type ApplyNowEight = {
  isCalendlyBooked: boolean;
};

type ApplyNowEightProps = ApplyNowEight & {
  updateField: (field: ApplyNowEight) => void;
};

const ApplyNowEight = ({
  isCalendlyBooked,
  updateField,
}: ApplyNowEightProps) => {
  return (
    <section className="w-full h-auto bg-primary-black">
      <div className="container mx-auto flex flex-col gap-16 px-6 pt-[146px]">
        <div className="flex flex-col gap-2">
          <h1 className="text-white text-h3-mobile md:text-h3 w-full md:w-3/4">
            8. For a quicker start, book a call with us here!
          </h1>
          <p className="text-white text-description">*Optional</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-full flex justify-center max-h-[600px] ">
            <div className="rounded-2xl overflow-hidden mb-12">
              {process.env.NEXT_PUBLIC_CALENDLY_EVENT_LINK && (
                <CalendlyEmbed
                  url={process.env.NEXT_PUBLIC_CALENDLY_EVENT_LINK}
                />
              )}
            </div>
          </div>
          <input
            hidden
            type="checkbox"
            checked={isCalendlyBooked}
            onChange={(e) =>
              updateField({ isCalendlyBooked: e.target.checked })
            }
            placeholder="OnlyFans link"
            className="bg-transparent text-white !text-form-text !border-b-[2px] !border-b-white w-full border-t-0 border-x-0 rounded-none"
          />
        </div>
      </div>
    </section>
  );
};

export default ApplyNowEight;
