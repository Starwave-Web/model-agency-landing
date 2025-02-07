import ReactGA from 'react-ga4';

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;

export const initGA = () => {
  if (GA_TRACKING_ID) {
    ReactGA.initialize(GA_TRACKING_ID);
  }
};

export const trackPageView = (url: string) => {
  ReactGA.send({ hitType: "pageview", page: url });
};

export const trackEvent = (category: string, action: string, label?: string, value?: number) => {
  ReactGA.event({
    category,
    action,
    label,
    value,
  });
};
