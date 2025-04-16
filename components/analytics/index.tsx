import Script from "next/script";
import React from "react";

const GoogleAnalyticsScripts = () => {
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;

  if (!GA_TRACKING_ID) {
    console.warn("Google Analytics tracking ID is missing");
    return null;
  }

  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script id="ga-init">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalyticsScripts;
