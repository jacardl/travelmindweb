import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { analytics, trackPageView } from '../utils/analytics';

export const useAnalytics = () => {
  const location = useLocation();

  // 自动追踪页面浏览
  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return {
    trackEvent: analytics.event.bind(analytics),
    trackLogin: analytics.login.bind(analytics),
    trackSignUp: analytics.signUp.bind(analytics),
    trackButtonClick: analytics.buttonClick.bind(analytics),
    trackDownload: analytics.download.bind(analytics),
    trackSearch: analytics.search.bind(analytics),
    trackConversion: analytics.conversion.bind(analytics),
    setUserProperties: analytics.setUserProperties.bind(analytics),
    setUserId: analytics.setUserId.bind(analytics)
  };
};