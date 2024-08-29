import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TextCard from '../components/TextCard';

const Contact: React.FC = () => {
  return (
    <div className="bg-slate-900 min-h-screen flex flex-col pb-[4rem]">
      <Navbar />
      <div className="flex-grow pt-[2rem] px-[4rem]">
        <h1 className="text-4xl text-white text-center mb-[4rem]">Contact Me</h1>
        <TextCard hoverZoom={true} className="mx-auto max-w-3xl mb-[2rem] bg-slate-800 border-2 border-blue-500 hover:shadow-[0_10px_40px_rgba(59,130,246,0.7)]">
          <p className="text-slate-300 text-lg text-center">
            1. Si vous aimez mon travail, n'hésitez pas à me contacter à l'adresse suivante : <br />
            <span className="text-blue-500">w.mariamonmw@gmail.com</span>
          </p>
        </TextCard>
        <div className="flex justify-center mb-[2rem]">
          <img
            src="/images/contact/smaintos.png" 
            alt="Profile"
            className="rounded-lg shadow-lg w-[150px] h-[150px] object-cover"
          />
        </div>
        <TextCard hoverZoom={true} className="mx-auto max-w-3xl bg-slate-800 border-2 border-blue-500 hover:shadow-[0_10px_40px_rgba(59,130,246,0.7)]">
          <p className="text-slate-300 text-lg text-center">
            Rendez-vous sur mon profil GitHub pour découvrir davantage de projets : <br />
            <a href="https://github.com/smaintos" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Mon profil GitHub
            </a>
          </p>
        </TextCard>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
