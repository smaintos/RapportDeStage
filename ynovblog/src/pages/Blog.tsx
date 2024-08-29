import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MiniCard from '../components/MiniCard';

const Blog: React.FC = () => {
  return (
    <div className="bg-slate-900 min-h-screen flex flex-col pb-16">
      <Navbar />
      <div className="flex-grow pt-8 px-4 md:px-16 lg:px-32">
        <h1 className="text-4xl text-white text-center mb-16">Articles</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <MiniCard title="Le commencement" link="/sujet-1" index={1} />
          <MiniCard title="Design" link="/sujet-2" index={2} />
          <MiniCard title="Découverte du CMS" link="/sujet-3" index={3} />
          <MiniCard title="Back-end et..." link="/sujet-4" index={4} />
          <MiniCard title="Conclusion" link="/sujet-5" index={5} />
        </div>
      </div>
      <Footer className="ml-8"/>
    </div>
  );
};

export default Blog;
