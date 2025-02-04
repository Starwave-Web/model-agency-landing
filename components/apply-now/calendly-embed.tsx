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

// <!-- Calendly inline widget begin -->
// <div class="calendly-inline-widget" data-url="https://calendly.com/ebeautyagency/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=1c1d1f&text_color=ffffff&primary_color=bfa27d" style="min-width:320px;height:700px;"></div>
// <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
// <!-- Calendly inline widget end -->
