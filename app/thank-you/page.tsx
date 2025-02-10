import { Button } from "@/components/ui/button";
import { Crown } from "lucide-react";
import Link from "next/link";

const ThankYou = () => {
  return (
    <main>
      <section className="w-full bg-primary-black -mt-[100px]">
        <div className="container mx-auto px-6 flex flex-col gap-10 md:gap-20 py-20 md:py-40">
          <div className=" text-white flex flex-col gap-8 md:gap-16">
            <div className="flex gap-1 items-center">
              <Crown className="h-[36px] w-[36px] md:h-[66px] md:w-[66px] text-[#D0B48C]" />
              <p className="primary-gradient-text text-[40px] md:text-[80px] font-semibold">
                Elluxe
              </p>
            </div>
            <h1 className="text-h1-mobile md:text-h1">
              <span className="primary-gradient-text">Thank You</span> for Your
              Submission!
            </h1>
            <p className="text-h4-mobile md:text-h4">
              We&apos;ve{" "}
              <span className="primary-gradient-text">
                received your application
              </span>{" "}
              and will be in touch soon!
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
            <Link href="/">
              <Button variant="default">Return to Home page</Button>
            </Link>
            <Link href="/services">
              <Button variant="default">Go back to services</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ThankYou;
