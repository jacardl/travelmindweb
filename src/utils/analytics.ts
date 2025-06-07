// 声明 gtag 函数类型
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: any
    ) => void;
    dataLayer: any[];
  }
}

class GoogleAnalytics {
  private measurementId: string;
  private isInitialized: boolean = false;

  constructor(measurementId: string) {
    this.measurementId = measurementId;
    this.init();
  }

  private init() {
    if (typeof window !== 'undefined' && window.gtag) {
      this.isInitialized = true;
    }
  }

  // 页面浏览追踪
  pageView(url: string, title?: string) {
    if (!this.isInitialized) return;
    
    window.gtag('config', this.measurementId, {
      page_path: url,
      page_title: title || document.title,
    });
  }

  // 事件追踪
  event(eventName: string, parameters: Record<string, any> = {}) {
    if (!this.isInitialized) return;
    
    window.gtag('event', eventName, {
      event_category: parameters.category || 'engagement',
      event_label: parameters.label,
      value: parameters.value,
      ...parameters
    });
  }

  // 用户登录事件
  login(method: string) {
    this.event('login', {
      method: method,
      event_category: 'authentication'
    });
  }

  // 用户注册事件
  signUp(method: string) {
    this.event('sign_up', {
      method: method,
      event_category: 'authentication'
    });
  }

  // 按钮点击事件
  buttonClick(buttonName: string, section?: string) {
    this.event('button_click', {
      button_name: buttonName,
      section: section,
      event_category: 'engagement'
    });
  }

  // 下载事件
  download(fileName: string, fileType?: string) {
    this.event('file_download', {
      file_name: fileName,
      file_type: fileType,
      event_category: 'downloads'
    });
  }

  // 搜索事件
  search(searchTerm: string) {
    this.event('search', {
      search_term: searchTerm,
      event_category: 'search'
    });
  }

  // 自定义转化事件
  conversion(conversionName: string, value?: number) {
    this.event(conversionName, {
      value: value,
      currency: 'USD',
      event_category: 'conversion'
    });
  }

  // 设置用户属性
  setUserProperties(properties: Record<string, any>) {
    if (!this.isInitialized) return;
    
    window.gtag('set', {
      user_properties: properties
    });
  }

  // 设置用户 ID
  setUserId(userId: string) {
    if (!this.isInitialized) return;
    
    window.gtag('config', this.measurementId, {
      user_id: userId
    });
  }
}

// 创建单例实例
const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID || 'GA_MEASUREMENT_ID';
export const analytics = new GoogleAnalytics(measurementId);

// 导出便捷方法
export const trackPageView = (url: string, title?: string) => analytics.pageView(url, title);
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => analytics.event(eventName, parameters);
export const trackLogin = (method: string) => analytics.login(method);
export const trackSignUp = (method: string) => analytics.signUp(method);
export const trackButtonClick = (buttonName: string, section?: string) => analytics.buttonClick(buttonName, section);
export const trackDownload = (fileName: string, fileType?: string) => analytics.download(fileName, fileType);
export const trackSearch = (searchTerm: string) => analytics.search(searchTerm);
export const trackConversion = (conversionName: string, value?: number) => analytics.conversion(conversionName, value);