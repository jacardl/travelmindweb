import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { analytics } from '../utils/analytics';

interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  provider: 'google' | 'email';
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (user: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 检查本地存储中的用户信息
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    
    // 追踪登录事件
    analytics.login(userData.provider);
    
    // 设置用户 ID
    analytics.setUserId(userData.id);
    
    // 设置用户属性
    analytics.setUserProperties({
      user_type: 'authenticated',
      login_method: userData.provider
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    // 如果使用 Google 登录，也要登出 Google
    if (window.google) {
      window.google.accounts.id.disableAutoSelect();
    }
  };

  const value = {
    user,
    isLoading,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};