'use client';

import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa6';

interface LoginPageProps {
  onLogin: () => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate loading for better UX
    setTimeout(() => {
      if (password === 'growthstation123') {
        onLogin();
      } else {
        setError('كلمة المرور غير صحيحة');
        setIsLoading(false);
        setPassword('');
      }
    }, 800);
  };

  return (
    <div className="login-container">
      <div className="login-background">
        <div className="login-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="login-content">
        <div className="login-card">
          <div className="login-header">
            <div className="logo-section">
              <img src="/logo.svg" alt="Growth Station Logo" className="logo-image" />
              <h1 className="logo-text">Growth Station</h1>
            </div>
            <p className="login-subtitle">Launch Playbook</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
              <div className="input-wrapper">
                <div className="input-icon">
                  <svg viewBox="0 0 448 512" fill="currentColor">
                    <path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z"></path>
                  </svg>
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="أدخل كلمة المرور"
                  className="password-input"
                  disabled={isLoading}
                />
              </div>
              {error && <div className="error-message">{error}</div>}
            </div>

            <button 
              type="submit" 
              className={`login-button ${isLoading ? 'loading' : ''}`}
              disabled={isLoading || !password}
            >
              {isLoading ? (
                <span className="loading-text">جاري التحقق...</span>
              ) : (
                <>
                  <span>دخول</span>
                  <FaArrowRight className="button-icon" />
                </>
              )}
            </button>
          </form>

          <div className="login-footer">
            <p>Secure Access Only</p>
            <div className="security-badge">
              <div className="security-icon">
                <svg viewBox="0 0 448 512" fill="currentColor">
                  <path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z"></path>
                </svg>
              </div>
              <span>Protected</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .login-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          background: var(--bg);
        }

        .login-background {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .login-shapes {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.1;
          filter: blur(80px);
        }

        .shape-1 {
          width: 400px;
          height: 400px;
          background: var(--sage);
          top: -100px;
          right: -100px;
          animation: float 8s ease-in-out infinite;
        }

        .shape-2 {
          width: 300px;
          height: 300px;
          background: var(--orange);
          bottom: -50px;
          left: -50px;
          animation: float 10s ease-in-out infinite reverse;
        }

        .shape-3 {
          width: 250px;
          height: 250px;
          background: var(--forest-deep);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: float 12s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }

        .login-content {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 420px;
          padding: 20px;
        }

        .login-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          padding: 40px 32px;
          box-shadow: 0 25px 50px -12px rgba(10, 50, 6, 0.25);
          border: 1px solid rgba(10, 50, 6, 0.1);
        }

        .login-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .logo-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          margin-bottom: 8px;
        }

        .logo-image {
          height: 60px;
          width: auto;
          object-fit: contain;
        }

        .logo-text {
          font-size: 24px;
          font-weight: 800;
          color: var(--forest-deep);
          margin: 0;
          font-family: var(--font-cairo), sans-serif;
        }

        .login-subtitle {
          font-size: 14px;
          color: var(--sage-dim);
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin: 0;
          font-family: var(--font-mono), monospace;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 16px;
          color: var(--sage-dim);
          font-size: 16px;
          z-index: 1;
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .input-icon svg {
          width: 100%;
          height: 100%;
        }

        .password-input {
          width: 100%;
          padding: 16px 16px 16px 48px;
          border: 2px solid rgba(10, 50, 6, 0.15);
          border-radius: 12px;
          font-size: 15px;
          font-family: var(--font-cairo), sans-serif;
          background: rgba(247, 245, 239, 0.8);
          color: var(--forest-deep);
          transition: all 0.3s ease;
          outline: none;
        }

        .password-input:focus {
          border-color: var(--sage);
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 0 0 4px rgba(150, 205, 176, 0.1);
        }

        .password-input::placeholder {
          color: rgba(10, 50, 6, 0.4);
        }

        .password-input:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .error-message {
          color: var(--orange);
          font-size: 13px;
          font-weight: 600;
          padding: 8px 12px;
          background: rgba(230, 126, 34, 0.1);
          border-radius: 8px;
          border: 1px solid rgba(230, 126, 34, 0.2);
          text-align: center;
        }

        .login-button {
          width: 100%;
          padding: 16px 24px;
          background: linear-gradient(135deg, var(--forest-deep), var(--forest));
          color: var(--sand);
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 700;
          font-family: var(--font-cairo), sans-serif;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all 0.3s ease;
          box-shadow: 0 8px 16px rgba(10, 50, 6, 0.2);
        }

        .login-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(10, 50, 6, 0.3);
        }

        .login-button:active:not(:disabled) {
          transform: translateY(0);
        }

        .login-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .button-icon {
          font-size: 14px;
          transition: transform 0.3s ease;
        }

        .login-button:hover:not(:disabled) .button-icon {
          transform: translateX(4px);
        }

        .loading-text {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .loading-text::after {
          content: '';
          width: 16px;
          height: 16px;
          border: 2px solid rgba(219, 213, 188, 0.3);
          border-top-color: var(--sand);
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .login-footer {
          margin-top: 24px;
          text-align: center;
        }

        .login-footer p {
          font-size: 12px;
          color: rgba(10, 50, 6, 0.5);
          margin-bottom: 12px;
          font-family: var(--font-cairo), sans-serif;
        }

        .security-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: rgba(150, 205, 176, 0.1);
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
          color: var(--sage-dim);
          border: 1px solid rgba(150, 205, 176, 0.2);
        }

        .security-icon {
          width: 10px;
          height: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .security-icon svg {
          width: 100%;
          height: 100%;
        }

        @media (max-width: 480px) {
          .login-content {
            padding: 16px;
          }

          .login-card {
            padding: 32px 24px;
          }

          .logo-image {
            height: 50px;
          }

          .logo-text {
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  );
}