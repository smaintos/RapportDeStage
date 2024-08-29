import React from 'react';

interface CardProps {
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
  specialShadow?: boolean; 
}

const Card: React.FC<CardProps> = ({
  children,
  width = 'max-w-md',
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
  px = 'p-6',
  py,
  specialShadow = false, 
}) => {
  return (
    <div
      className={`
        ${width} ${height}
        ${mt || ''} ${mb || ''} ${ml || ''} ${mr || ''}
        ${mx} ${my || ''}
        ${pt || ''} ${pb || ''} ${pl || ''} ${pr || ''}
        ${px} ${py || ''}
        backdrop-blur-xl bg-white/10 shadow-lg
        border-[2px] border-blue-500 
        transition-transform duration-500 ease-in-out transform hover:-translate-y-12
        hover:backdrop-blur-xl hover:bg-white/20
        ${specialShadow ? 'hover:shadow-[0_10px_40px_rgba(59,130,246,0.7)]' : ''}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
