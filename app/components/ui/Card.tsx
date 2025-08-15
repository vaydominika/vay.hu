import React from 'react';

interface CardProps {
  children: React.ReactNode;
  backgroundColor?: string;
  borderRadius?: string;
  padding?: string;
  shadow?: boolean;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  backgroundColor = '#ffffff',
  borderRadius = '1rem',
  padding = '1.5rem',
  shadow = true,
  className = '',
  onClick,
}) => {
  const isGradient = backgroundColor.includes('gradient');
  
  return (
    <div
      onClick={onClick}
      className={`transition-all duration-200 ease-in-out ${onClick ? 'cursor-pointer' : ''} ${className}`}
      style={{
        [isGradient ? 'background' : 'backgroundColor']: backgroundColor,
        borderRadius: borderRadius,
        padding: padding,
        boxShadow: shadow ? '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), inset 0 2px 2px 0 rgba(255, 255, 255, 0.9)' : 'inset 0 2px 2px 0 rgba(255, 255, 255, 0.9)',
      }}
    >
      {children}
    </div>
  );
};

export default Card;
