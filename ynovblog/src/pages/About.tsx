import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TextCard from '../components/TextCard';

const About: React.FC = () => {
  return (
    <div className="bg-slate-900 min-h-screen flex flex-col pb-16">
      <Navbar />
      
      <div className="flex-grow pt-8 px-8">
        <div className="w-full mt-8 flex justify-center">
          <img 
            src="/images/banner.jpg" 
            alt="Bannière de l'association Nouvelle Voix" 
            className="w-full max-w-[1500px] h-[15rem] md:h-[50rem] object-cover object-top rounded-lg shadow-lg border-2 border-blue-500 transform transition-transform duration-300 hover:translate-y-[-15px]"
            loading="lazy"
          />
        </div>

        <div className="mt-16">
          <TextCard hoverZoom={true} className="relative z-10 bg-slate-800 border-2 border-blue-500 hover:shadow-[0_10px_40px_rgba(59,130,246,0.7)]">
            <h1 className="text-4xl md:text-5xl text-white font-light text-center">Présentation de l'Association Nouvelle Voix</h1>
            <br />
            <p className="text-slate-300 text-lg text-center">
              Je vous présente <span className="text-blue-500">Nouvelle Voix</span>, fondée par Massy Djaura, est une asso qui aide les gens à se remettre sur pied en les connectant aux métiers de l’audiovisuel et des arts. Ils travaillent sur la fracture numérique en donnant accès aux ressources nécessaires pour que chacun puisse se familiariser avec le numérique et trouver une voie pro qui lui parle.
              <br /><br />
              Ils savent que les métiers de l’audiovisuel et les parcours artistiques peuvent sembler inaccessibles, mais ils ouvrent ces portes à ceux qui en ont besoin. Avec des ateliers pour découvrir ces métiers, des projets pros, et un accompagnement sur mesure, Nouvelle Voix permet aux gens de transformer leurs passions en vrais boulots. En plus, ils ont un studio de musique, BNG Production, pour soutenir les projets artistiques.
              <br /><br />
              Bref, Nouvelle Voix, c’est l’asso qui donne un coup de pouce à ceux qui veulent retrouver leur place dans la société tout en kiffant ce qu’ils font.
            </p>
          </TextCard>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <img src="/images/association_1.jpg" alt="Talent artistique en performance" className="w-full h-[15rem] md:h-[30rem] object-cover rounded-lg shadow-lg transform hover:translate-y-[-10px] transition-transform duration-300" loading="lazy"/>
            <img src="/images/association_2.jpg" alt="Projet en cours chez Nouvelle Voix" className="w-full h-[15rem] md:h-[30rem] object-cover rounded-lg shadow-lg transform hover:translate-y-[-10px] transition-transform duration-300" loading="lazy" />
          </div>
        </div>

        <div className="mt-24">
          <TextCard hoverZoom={true} className="relative z-10 bg-slate-800 border-2 border-blue-500 hover:shadow-[0_10px_40px_rgba(59,130,246,0.7)]">
            <h2 className="text-3xl md:text-4xl text-slate-200 text-center">Les Ateliers de Nouvelle Voix</h2>
            <br />
            <p className="text-slate-300 text-lg">
              Nouvelle Voix organise des ateliers vraiment intéressants pour ceux qui souhaitent découvrir les métiers créatifs et artistiques. Que ce soit en photo, musique, vidéo ou création artistique, ils vous donnent l’opportunité de toucher à tout, même si vous n’y connaissez rien au départ.
              <br /><br />
              Ces ateliers sont proposés là où ils sont vraiment nécessaires : dans les écoles, les prisons, les centres sociaux… Bref, là où il y a des personnes qui ont besoin d’un coup de pouce pour découvrir de nouvelles voies professionnelles. Les professionnels de l’asso, et même des experts d’autres entreprises, viennent animer les sessions. Vous avez accès à du matériel professionnel et vous apprenez les bases de chaque métier, les formations possibles, et tout ce qu’il faut savoir pour vous lancer.
              <br /><br />
              L’idée, c’est de vous permettre d’expérimenter, de voir si un de ces métiers pourrait vous plaire, et de vous ouvrir des portes vers des formations ou un emploi. En gros, c’est une super opportunité pour explorer vos passions et peut-être en faire un véritable métier.
            </p>
          </TextCard>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <img src="/images/association_3.jpg" alt="Atelier artistique en cours" className="w-full h-[15rem] md:h-[30rem] object-cover rounded-lg shadow-lg transform hover:translate-y-[-10px] transition-transform duration-300" loading="lazy"/>
            <img src="/images/association_4.jpg" alt="Participants à un atelier de Nouvelle Voix" className="w-full h-[15rem] md:h-[30rem] object-cover rounded-lg shadow-lg object-right-top transform hover:translate-y-[-10px] transition-transform duration-300" loading="lazy"/>
          </div>
        </div>

        <div className="mt-24">
          <TextCard hoverZoom={true} className="relative z-10 bg-slate-800 border-2 border-blue-500 hover:shadow-[0_10px_40px_rgba(59,130,246,0.7)]">
            <h2 className="text-3xl md:text-4xl text-slate-200 text-center">Événements Organisés par Nouvelle Voix</h2>
            <br />
            <p className="text-slate-300 text-lg">
              Nouvelle Voix ne se contente pas de proposer des ateliers, ils organisent aussi des événements qui méritent le détour, surtout si vous êtes passionné par la musique et l’audiovisuel. Parmi ces événements, les Open Mic tiennent une place spéciale. C’est le moment parfait pour les artistes locaux de monter sur scène, de se faire connaître, et de rencontrer d’autres talents. C’est une ambiance super conviviale où l’on peut partager, découvrir de nouveaux sons, et pourquoi pas, créer des collaborations qui dépotent.
              <br /><br />
              Ils organisent aussi des conférences qui valent vraiment le coup. C’est l’occasion de rencontrer des pros du milieu audiovisuel et artistique, d’écouter leurs expériences, et de poser toutes vos questions. Ces conférences sont souvent animées par des intervenants avec des parcours atypiques, ce qui rend chaque échange unique et inspirant.
              <br /><br />
              En gros, Nouvelle Voix, c’est l’asso qui met tout en œuvre pour connecter les talents, les inspirer, et les aider à se faire une place dans le milieu.
            </p>
          </TextCard>
          <div className="mt-16">
            <img src="/images/association_5.jpg" alt="Événement organisé par Nouvelle Voix" className="w-full h-[15rem] md:h-[30rem] object-cover rounded-lg shadow-lg transform hover:translate-y-[-10px] transition-transform duration-300" loading="lazy"/>
          </div>
        </div>

        <div className="mt-24 mb-16">
          <TextCard hoverZoom={true} className="relative z-10 bg-slate-800 border-2 border-blue-500 hover:shadow-[0_10px_40px_rgba(59,130,246,0.7)]">
            <h2 className="text-3xl md:text-4xl text-slate-200 text-center">Objectifs et Valeurs de Nouvelle Voix</h2>
            <br />
            <p className="text-slate-300 text-lg">
              <span className="text-blue-500">Nouvelle Voix</span> s'engage à découvrir et à promouvoir de nouveaux talents dans le domaine artistique, en offrant un soutien continu aux artistes émergents. L'association met un point d'honneur à organiser des événements et des ateliers qui favorisent la perfection des compétences artistiques tout en promouvant la diversité et l'inclusivité au sein de la communauté artistique.
            </p>
          </TextCard>
        </div>
      </div>

      <Footer className="ml-8" />
    </div>
  );
};

export default About;
