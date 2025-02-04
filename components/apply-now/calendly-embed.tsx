import { useEffect } from "react";

const CalendlyEmbed = ({ url }: { url?: string }) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    if (head) {
      head.appendChild(script);
    }
  }, []);

  return (
    <div
      className="calendly-inline-widget min-w-[252px] md:w-[600px] h-[600px]"
      data-url={url}
    ></div>
  );
};

export default CalendlyEmbed;

