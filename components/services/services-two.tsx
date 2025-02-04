import FadeInAnimation from "../common/fade-in-animation";

const ServicesTwo = () => {
    return (
      <section className="w-full bg-primary-black py-36 md:py-[181px]">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <FadeInAnimation threshold={0.2} className="text-white font-semibold text-[1rem] md:text-[2.25rem] flex flex-col items-center gap-9 md:gap-16 w-full md:w-3/4 text-center">
            <div>
                <h6>Welcome to Elluxe, the management company for top influencers who value integrity, trust, and convenience.</h6>
                <h6>We focus on delivering exceptional services, allowing our models to live their best lives while we handle everything else.</h6>
                <h6>With our exclusive management and strict NDAs, your partnership with us remains entirely confidential.</h6>
            </div>
          </FadeInAnimation>
          </div>
      </section>
    );
  };
  
  export default ServicesTwo;