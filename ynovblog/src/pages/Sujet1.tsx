import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';
import Tooltip from '../components/Tooltip';
import { FaArrowRight } from 'react-icons/fa'; 


const Sujet1: React.FC = () => {
  return (
    <div className="bg-slate-900 min-h-screen flex flex-col pb-[4rem]">
      <Navbar />
      <BlogCard content="1. Le Commencement" className="mt-[1.5rem]" />
      <div className="flex-grow pt-[2rem] px-[4rem]">
        <h1 className="text-2xl font-bold text-white ml-[27rem] mt-[1rem]">L'asso et la vitrine</h1>
        <br></br>
        <div className="mx-auto max-w-3xl">
          <div className="mb-[4rem] text-left">
            <p className="text-slate-300 text-lg mb-4">
              Dans les pages précédentes, vous avez pu découvrir l'association et ses objectifs. 
              Mais au final, qu'est-ce que je fais là ?
            </p>
            <p className="text-slate-300 text-lg mb-4">
              Comme toute association d'événementiel, il faut bien une vitrine qui donne envie aux gens de venir voir ce qu'ils font 
              et toucher un maximum de monde. 
              C'est là que mon collègue et moi intervenons.
              <br></br>
              <br></br>
              Car oui, nous sommes deux sur ce stage. 
              C'était une belle opportunité de travailler dans un milieu qui me plaît et, en plus, avec un ami avec qui je m'entendais très bien.
            </p>
          </div>
          <div className="mb-[4rem] text-left">
            <h2 className="text-2xl text-white mb-4 font-bold">Le but du stage</h2>
            <p className="text-slate-300 text-lg mb-4">
              Il fallait comprendre le problème de l'association. 
              Jusqu'à présent, ils communiquaient uniquement via les réseaux sociaux comme Instagram
              par exemple, ce qui était une bonne stratégie pour toucher un maximum de monde. 
              Mais ils ont constaté qu'une partie de la communication de leurs activités passait ailleurs, notamment sur leur site web.
            </p>
            <p className="text-slate-300 text-lg mb-4">
              Le problème était que leur site n'était pas à la hauteur de la
              <span> </span>
              <Tooltip text="DA" definition="Direction artistique." />
              <span> </span>
              qu'ils souhaitaient avoir. 
              Il fallait donc procéder à une refonte complète du site et proposer des solutions de DA adaptées à l'ambiance et 
              à l'image que l'association voulait refléter auprès des adhérents.
            </p>
          </div>
          <div className="mb-[4rem] text-left">
            <h2 className="text-2xl text-white mb-4 font-bold">Trouver une solution</h2>
            <p className="text-slate-300 text-lg mb-4">
              Maintenant que nous savions ce que nous devions faire, il fallait réfléchir à comment le faire.
            </p>
            <p className="text-slate-300 text-lg mb-4">
              Nous avons donc décidé de repartir de zéro en tenant compte des quelques directives que notre maîtresse de stage nous avait fournies 
              lors de nos rendez-vous avec elle. 
              Nous avons identifié trois critères fondamentaux pour la refonte du site :
            </p>
            <ul className="list-disc text-left text-slate-300 text-lg mt-4 mx-auto w-[80%]">
              <li>Présenter l'association, ses valeurs, ses événements, et expliquer comment les rejoindre.</li>
              <li>Un site simple à lire, à prendre en main, et facilement modifiable via le
                <span> </span>
                <Tooltip text="CMS" definition="Définition de CMS : CMS est l'acronyme de Content Management System, c'est-à-dire système de gestion de contenu. Il s'agit d'un logiciel en ligne grâce auquel il est possible de créer, de gérer et de modifier facilement un site web, sans avoir besoin de connaissances techniques en langage informatique." />
              .</li>
              <li>Faciliter l'adhésion à l'association et montrer les avantages.</li>
            </ul>
            <p className="text-slate-300 text-lg mt-4 text-left">
              C'est à partir de ces trois grands piliers que nous nous sommes orientés pour la refonte du site de Nouvelle Voix. 
              Il est maintenant temps de passer au…
              <Link to="/sujet-2" className="text-blue-500 hover:underline"> DESIGN</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="text-right ml-[75rem] mb-[2rem]">
        <Link to="/sujet-2" className="text-blue-500 font-bold">
           <FaArrowRight className="ml-2" />
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Sujet1;
