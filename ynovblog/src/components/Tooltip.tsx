import React, { useState } from 'react';

interface TooltipProps {
  text: string;
  definition: string;
}

const Tooltip: React.FC<TooltipProps> = ({ text, definition }) => {
  const [visible, setVisible] = useState(false);

  return (
    <span className="relative inline-block">
      <span
        className="text-blue-500 cursor-pointer"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {text}*
      </span>
      {visible && (
        <div className="absolute bottom-full mb-2 w-64 p-2 bg-slate-800 text-slate-300 text-sm rounded-lg shadow-lg z-10">
          {definition}
        </div>
      )}
    </span>
  );
};

export default Tooltip;
