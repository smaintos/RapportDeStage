import React from 'react';

interface BlogCardProps {
  content: string;
  className?: string;  
}

const BlogCard: React.FC<BlogCardProps> = ({ content, className }) => {
  return (
    <div className={`text-center ${className || ''}`}>
      <div className="w-[50rem] h-[25rem] mx-auto my-4 block">
        <div className="w-full h-full bg-slate-800 bg-opacity-100 rounded-lg border-2 border-blue-500 shadow-[0_10px_30px_rgba(59,130,246,0.5)] flex justify-center items-center p-4">
          <p className="text-white text-center text-4xl font-medium">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
