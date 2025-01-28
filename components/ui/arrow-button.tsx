import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ArrowButton = ({ carousel }: { carousel: boolean }) => {
  return (
    <Button
      data-carousel={carousel}
      className="h-[30px] w-[30px] data-[carousel=true]:md:h-[50px] data-[carousel=true]:md:w-[50px] md:h-[60px] md:w-[60px] flex justify-center items-center p-0"
      variant="icon"
    >
      <ArrowRight className="h-[10px] w-[11px] md:h-[21px] md:w-[24px]" />
    </Button>
  );
};

export default ArrowButton;
