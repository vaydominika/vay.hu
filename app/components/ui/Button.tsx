"use client";

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
  textColor?: string;
  borderRadius?: string;
  customShadow?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  color,
  textColor = '#ffffff',
  borderRadius = '0.5rem',
  onClick,
  className = '',
  disabled = false,
  customShadow,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center px-[1.0625rem] py-[1.0625rem] font-medium hover:scale-105 active:scale-95 transition-all duration-200 ${className}`}
      style={{
        backgroundColor: color,
        color: textColor,
        borderRadius: borderRadius,
        boxShadow:
          customShadow ||
          '0 2px 2px 0 rgba(0, 0, 0, 0.2), inset 0 2px 2px 0 rgba(255, 255, 255, 0.9)',
      }}
      {...rest}
    >
      <span className="translate-y-[2px]">{children}</span>
    </button>
  );
};

export default Button;
