import Script from "next/script";
import React from "react";

const ClarityTrackingScript = () => {
    const CLARITY_TRACKING_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;

    if (!CLARITY_TRACKING_ID) {
        console.warn("Clarity Tracking ID is missing");
        return null;
    }

    return (
        <Script id="clarity-tracking-script">
            {`
        (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${CLARITY_TRACKING_ID}");`}
        </Script>
    );
};

export default ClarityTrackingScript;
