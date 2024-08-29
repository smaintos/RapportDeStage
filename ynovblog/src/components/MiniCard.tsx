import React from 'react';
import { Link } from 'react-router-dom';

interface MiniCardProps {
  title: string;
  link: string;
  index: number;
}

const MiniCard: React.FC<MiniCardProps> = ({ title, link, index }) => {
  return (
    <div className="text-center">
      <Link to={link} className="w-[12rem] h-[12rem] mx-auto my-4 block">
        <div className="w-full h-full bg-slate-800 bg-opacity-100 rounded-lg border-2 border-blue-500 shadow-[0_10px_30px_rgba(59,130,246,0.5)] transform hover:scale-125 transition-transform duration-300 flex justify-center items-center">
          <h3 className="text-white text-center text-xl font-semibold">{title}</h3>
        </div>
      </Link>
      <p className="text-white text-lg mt-2">{index}. {title}</p>
    </div>
  );
};

export default MiniCard;
