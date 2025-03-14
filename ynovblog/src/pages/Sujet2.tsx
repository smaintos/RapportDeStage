import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Tooltip from '../components/Tooltip'; 
import BlogCard from '../components/BlogCard';
import { Link } from 'react-router-dom'; 
import { FaArrowRight } from 'react-icons/fa'; 

const Sujet2: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-900 min-h-screen flex flex-col pb-16">
      <Navbar />
      <BlogCard content="2. Design" className="mt-6" />
      <div className="flex-grow pt-8 px-4 md:px-16 lg:px-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-2xl font-bold text-white mb-4">Du coup on lance Figma !</h1>
          <div className="text-left">
            <p className="text-slate-300 text-lg mb-4">
              Avant de faire ou refaire un site web, on ne peut pas commencer à dev tout de suite. 
              Il y a la question de la tech-stack qu'on va utiliser, et cela varie selon chaque développeur, 
              mais il y a quelque chose de commun : le DESIGN du site.
              Pour mener à bien les prémices du projet, il faut donc déjà ouvrir <Tooltip text="Figma" definition="Figma est un outil de design d'interface utilisé pour créer des maquettes et prototypes de sites web et applications." />.
            </p>

            <p className="text-slate-300 text-lg mb-4">
              Étant donné que les seules directives qui nous ont été données sont :
            </p>

            <ul className="list-disc text-left text-slate-300 text-lg mt-4 mx-auto w-full md:w-3/4 lg:w-2/3">
              <li>Avoir une barre de navigation (comme sur le site que vous êtes actuellement ;)</li>
              <li>Avoir un compte à rebours du prochain événement dans la bannière du site.</li>
              <li>Avoir toutes les rubriques des activités principales de l'asso visibles dès l'arrivée sur le site.</li>
              <li>Avoir une galerie photo</li>
            </ul>

            <p className="text-slate-300 text-lg mt-4">
              Nous nous sommes tout de même basés sur la DA de base du site, qui se présente de cette manière (malheureusement, je n'ai pas pu avoir de visuel du site de base) :
            </p>
          </div>
          <div className="mb-16 text-left">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <img
                src="/images/dabase/logoblanc.png"
                alt="Example design"
                className="w-full h-auto object-cover"
              />
              <img
                src="/images/dabase/Logoblancpng.png"
                alt="Design elements"
                className="w-full h-auto object-cover"
              />
            </div>
            <br />
            <p className="text-slate-300 text-lg mb-4">
              Nous sommes donc partis, dans un premier temps, refaire le logo de l'asso à partir du 
              logo de base, et nous sommes arrivés au résultat de la bannière du site avec un nouveau logo composé du nom de l'asso et du logo de base avec de la couleur.
            </p>
            <br />
            <img
              src="/images/newda/logo.png"
              alt="Design elements"
              className="w-40 h-auto object-cover mb-4"
            />
            <img
              src="/images/newda/nouveaulogo.png"
              alt="Design elements"
              className="w-full h-auto object-cover mb-4"
            />
            <img
              src="/images/newda/banniere.png"
              alt="Design elements"
              className="w-full h-auto object-cover mb-4"
            />
            <br />
            <p className="text-slate-300 text-lg mb-4">
              Bon, c'est parfait, on a un logo qui plaît, une bannière validée, et la maquette est validée avec nos différentes façons de structurer le site.
            </p>
            <br />
            <div className="grid grid-cols-2 gap-4 mb-4">
              <img
                src="/images/newda/accueil.png"
                alt="Design elements"
                className="w-full h-auto object-cover"
              />
              <img
                src="/images/newda/exemple1.png"
                alt="Design elements"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <img
                src="/images/newda/exemple2.png"
                alt="Design elements"
                className="w-full h-auto object-cover"
              />
              <img
                src="/images/newda/exemple3.png"
                alt="Design elements"
                className="w-full h-auto object-cover"
              />
            </div>
            <br />
            <p className="text-slate-300 text-lg mb-4">
              Voici une vision globale de la maquette du site validée :
            </p>
            <br />
            <img
              src="/images/newda/global.png"
              alt="Design elements"
              className="w-full h-auto object-cover"
            />
            <br />
            <p className="text-slate-300 text-lg mb-4">
              On retrouve donc bien dans la maquette toutes les conditions posées par l'asso, et nous sommes donc prêts à passer à <Link to="/sujet-3" className="text-blue-500 hover:underline">la prochaine étape</Link>, qui va être LE CMS.
            </p>
            <br />
          </div>
        </div>
      </div>
      <div className="text-right mr-8 md:mr-16 lg:mr-32 mb-8">
        <Link to="/sujet-3" className="text-blue-500 font-bold">
           <FaArrowRight className="inline-block" />
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Sujet2;
