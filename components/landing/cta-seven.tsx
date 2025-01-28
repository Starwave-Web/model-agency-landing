import { Button } from "@/components/ui/button";

const CTASeven = () => {
  return (
    <section className="w-full bg-primary-black">
      <div className="container mx-auto px-6 py-[16.125rem] flex flex-col items-center">
        <div className="flex flex-col items-start gap-8 md:gap-16">
          <h4 className="text-white text-h4-mobile md:text-h4">
            Are you <span className="primary-gradient-text">truly</span>{" "}
            satisfied with your current management?
          </h4>
          <div className="flex flex-col items-start gap-5 md:gap-8">
            <h4 className="text-white text-h4-mobile md:text-h4">
              <span className="underline">Trust your instincts</span> and
              schedule a call with us.
            </h4>
            <p className="text-white text-services-menu-mobile md:text-services-menu">
              It’s just a few minutes, but it could{" "}
              <span className="primary-gradient-text"></span>change everything.
            </p>
          </div>

          <Button variant="default">Apply Now</Button>
        </div>
      </div>
    </section>
  );
};

export default CTASeven;
