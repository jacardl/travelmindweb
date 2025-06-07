// 修复gtag函数的类型定义
declare global {
  interface Window {
    gtag: {
      (command: 'config', targetId: string, config?: any): void;
      (command: 'event', eventName: string, config?: any): void;
      (command: 'js', date: Date): void;
      (command: 'set', config: any): void;
    };
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

  private async init() {
    // 只在生产环境或有有效测量ID时初始化
    if (typeof window === 'undefined' || 
        !this.measurementId || 
        this.measurementId === 'GA_MEASUREMENT_ID' ||
        this.measurementId.includes('localhost')) {
      console.log('Google Analytics: 跳过初始化（开发环境或无效配置）');
      return;
    }

    try {
      // 动态加载Google Analytics脚本
      await this.loadGoogleAnalytics();
      this.isInitialized = true;
      console.log('Google Analytics: 初始化成功');
    } catch (error) {
      console.warn('Google Analytics: 初始化失败', error);
    }
  }

  private loadGoogleAnalytics(): Promise<void> {
    return new Promise((resolve, reject) => {
      // 检查是否已经加载
      if (typeof window.gtag === 'function') {
        resolve();
        return;
      }

      // 初始化dataLayer
      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        window.dataLayer.push(arguments);
      } as any;

      // 创建脚本元素
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${this.measurementId}`;
      
      script.onload = () => {
        window.gtag('js', new Date());
        window.gtag('config', this.measurementId, {
          page_title: document.title,
          page_location: window.location.href,
          // 禁用广告功能
          allow_google_signals: false,
          allow_ad_personalization_signals: false
        });
        resolve();
      };
      
      script.onerror = () => {
        reject(new Error('Failed to load Google Analytics script'));
      };
      
      document.head.appendChild(script);
    });
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
    if (!this.isInitialized) {
      console.log('Google Analytics: 未初始化，跳过设置用户属性');
      return;
    }
    
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
const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID || '';
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

// 检查analytics.ts文件，确保配置正确
// 避免启用广告相关的功能