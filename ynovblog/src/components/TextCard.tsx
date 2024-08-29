import React from 'react';

interface TextCardProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  mx?: string;
  my?: string;
  pt?: string;
  pb?: string;
  pl?: string;
  pr?: string;
  px?: string;
  py?: string;
  hoverZoom?: boolean;
  className?: string; 
}

const TextCard: React.FC<TextCardProps> = ({
  children,
  width = 'max-w-3xl',
  height = 'h-auto',
  mt,
  mb,
  ml,
  mr,
  mx = 'mx-auto',
  my,
  pt,
  pb,
  pl,
  pr,
  px = 'p-8',
  py,
  hoverZoom = false, 
  className, 
}) => {
  return (
    <div
      className={`
        ${width} ${height}
        ${mt || ''} ${mb || ''} ${ml || ''} ${mr || ''}
        ${mx} ${my || ''}
        ${pt || ''} ${pb || ''} ${pl || ''} ${pr || ''}
        ${px} ${py || ''}
        bg-slate-800 bg-opacity-100 rounded-lg shadow-lg
        ${hoverZoom ? 'transform hover:scale-105 transition-transform duration-300' : ''}
        ${className || ''} // Application de la className si elle est fournie
      `}
    >
      {children}
    </div>
  );
};

export default TextCard;
