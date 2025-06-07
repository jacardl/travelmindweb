import React, { useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';

interface GoogleLoginProps {
  onSuccess?: () => void;
  onError?: (error: any) => void;
}

const GoogleLogin: React.FC<GoogleLoginProps> = ({ onSuccess, onError }) => {
  const { login } = useAuth();

  useEffect(() => {
    // 检查 Google Identity Services 是否已加载
    const initializeGoogleSignIn = () => {
      if (window.google && window.google.accounts) {
        const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
        
        if (!clientId) {
          console.error('Google Client ID not found in environment variables');
          onError?.(new Error('Google Client ID not configured'));
          return;
        }

        window.google.accounts.id.initialize({
          client_id: clientId,
          callback: handleCredentialResponse,
        });

        // 确保按钮容器存在后再渲染
        const buttonContainer = document.getElementById('google-signin-button');
        if (buttonContainer) {
          window.google.accounts.id.renderButton(
            buttonContainer,
            {
              theme: 'outline',
              size: 'large',
              width: 280,
              text: 'signin_with',
              shape: 'rectangular',
            }
          );
        }
      }
    };

    // 如果 Google API 已经加载，直接初始化
    if (window.google) {
      initializeGoogleSignIn();
    } else {
      // 否则等待脚本加载完成
      const checkGoogleLoaded = setInterval(() => {
        if (window.google) {
          clearInterval(checkGoogleLoaded);
          initializeGoogleSignIn();
        }
      }, 100);

      // 清理定时器
      return () => clearInterval(checkGoogleLoaded);
    }
  }, []);

  const handleCredentialResponse = async (response: any) => {
    try {
      // 解析 JWT token
      const payload = JSON.parse(atob(response.credential.split('.')[1]));
      
      const userData = {
        id: payload.sub,
        email: payload.email,
        name: payload.name,
        avatar: payload.picture,
        provider: 'google' as const,
      };

      login(userData);
      onSuccess?.();
    } catch (error) {
      console.error('Google login error:', error);
      onError?.(error);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div id="google-signin-button" className="w-full flex justify-center"></div>
    </div>
  );
};

export default GoogleLogin;