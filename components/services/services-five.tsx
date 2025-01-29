import { Button } from "@/components/ui/button";


const ServicesFive = () => {
  return (
    <section className="w-full bg-primary-black">
      <div className="container mx-auto px-6 py-32 md:py-[190px]">
        <div className="flex justify-between">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="flex flex-row gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-[2px] text-white">
                  <h4 className="text-h4">01</h4>
                  <p className="text-description">Marketing</p>
                </div>
                <p className="text-white text-description leading-[22px] tracking-[2%] md:w-[250px]">
                  At Elluxe, we know that effective marketing is essential for
                  growing and sustaining a successful account. Our team of
                  experts uses proven strategies to boost engagement and foster
                  genuine fan loyalty. By crafting a personalized marketing plan
                  tailored to your brand and goals, we ensure your success. From
                  social media promotion to targeted advertising and niche
                  campaigns, we employ diverse strategies to help you reach the
                  right audience and maximize your earnings.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-[2px] text-white">
                  <h4 className="text-h4">02</h4>
                  <p className="text-description">
                    OnlyFans Account Management 
                  </p>
                </div>
                <p className="text-white text-description leading-[22px] tracking-[2%] md:w-[250px]">
                  Managing an account can be overwhelming, especially as your
                  audience grows. Our team takes care of everything, from
                  optimizing your profile and setting subscription rates to
                  chatting 24/7 with your subscribers, building lasting
                  connections that boost long-term earnings. This way, you can
                  focus solely on what you do best: creating superb content for
                  your fans
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-[2px] text-white">
                  <h4 className="text-h4">03</h4>
                  <p className="text-description">Social Media Management</p>
                </div>
                <p className="text-white text-description leading-[22px] tracking-[2%] md:w-[250px]">
                  Social media is a powerful way for celebrities to connect with
                  fans and promote their content. At Elluxe, we understand how
                  managing multiple accounts can be overwhelming. That’s why our
                  social media management team takes care of creating, managing,
                  and optimizing your presence on platforms like Instagram,
                  Twitter, and TikTok. Focus on creating amazing content and
                  enjoying life while we handle the rest.
                </p>
                <Button className="md:hidden w-fit mt-4" variant="outline">
                  Apply Now
                </Button>
              </div>
              <div className="flex flex-col items-end justify-between">
                <h4 className="primary-gradient-text text-h4-mobile md:text-h4 mb-8 md:text-right">
                  Management
                  <br />{" "}
                  <span className="primary-gradient-text">& Marketing</span>
                </h4>
                <Button className="hidden md:block" variant="outline">
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesFive;
