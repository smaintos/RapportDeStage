import React from 'react';
import '../index.css';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import TextCard from '../components/TextCard';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="bg-slate-900 min-h-screen flex flex-col pb-16">
      <Navbar />
      <div className="flex-grow pt-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mx-8 md:ml-16">
            <Card mt="mt-8 md:mt-36" width="w-full md:w-[43rem]" height="h-auto md:h-[27rem] text-lg" specialShadow={true}>
              <h1 className="text-4xl md:text-5xl text-white font-light text-center md:text-left md:ml-28">Nouvelle Voix</h1>
              <br />
              <p className="text-slate-300 text-center md:text-left">
                Je vous présente Nouvelle Voix, une association dédiée à la découverte et à la promotion des talents artistiques,
                particulièrement dans le <span className="text-blue-700">domaine musical.</span>
                <br /><br />
                Bien que je ne fasse pas partie de cette association, j'ai été impressionné par leur <span className="text-blue-700">engagement à soutenir les jeunes artistes</span> en leur offrant des opportunités uniques pour développer leur potentiel.
                <br /><br />
                Nouvelle Voix organise des <span className="text-blue-700">projets</span>, <span className="text-blue-700">ateliers</span> et <span className="text-blue-700">événements</span> qui permettent aux artistes émergents de se perfectionner et de se faire connaître. L'association valorise la diversité et crée un environnement inclusif où chaque artiste peut s'épanouir.
              </p>
            </Card>
          </div>
          <div className="mx-8 md:mr-16 mt-8 md:mt-24 space-y-8">
            <h2 className="text-white text-4xl md:text-6xl custom-underline2 font-light text-center md:text-left md:ml-36">
              William Mariamon
            </h2>
            <p className="text-slate-300 text-lg mt-4 text-center md:text-left">
              Étudiant en fin de 2ème année de Master Informatique à Ynov Campus, je suis passionné par le développement web et voici mon rapport de stage pour l'entreprise <a href="https://massyproduction.com/" target="_blank" rel="noopener noreferrer" className="custom-underline text-blue-500 hover:text-blue-300">Massy Productions</a>.
              <br /><br />
              Dans ce rapport de stage/blog nous retrouvons :
            </p>
            <ul className="list-none mt-4 space-y-4 text-xl text-center md:text-left md:ml-48">
              <li className="transform transition-transform duration-300 hover:-translate-y-2">
                <a href="/about" className="text-blue-500">
                  - Découverte de l'association.
                </a>
              </li>
              <li className="transform transition-transform duration-300 hover:-translate-y-1">
                <a href="/sujet-1" className="text-blue-500">
                 - Déterminer les besoins.
                </a>
              </li>
              <li className="transform transition-transform duration-300 hover:-translate-y-1">
                <a href="/sujet-4" className="text-blue-500">
                  - Création du site.
                </a>
              </li>
              <li className="transform transition-transform duration-300 hover:-translate-y-1">
                <a href="/sujet-5" className="text-blue-500">
                  - Conclusion.
                </a>
              </li>
            </ul>
            <p className="text-slate-300 text-lg text-center md:text-left">
              Nous allons voir tout à travers ce site web qui contient mon blog, les différentes étapes de mon stage chez Massy Productions et vous pourrez voir les différentes étapes de la création du site pour l'association.
            </p>
          </div>
        </div>
        <div className="mt-24 px-8 md:px-32 space-y-8">
          <h2 className="text-slate-200 text-4xl text-center md:ml-[-1rem]">À propos de moi</h2>
          <TextCard>
            <p className="text-slate-300 text-lg">
              Je suis un développeur web passionné avec une expertise dans la création de sites web dynamiques. Mon parcours en informatique m'a permis d'acquérir une solide expérience en développement front-end et back-end. 
              <br/><br/>
              Étudiant actuellement en préparation d'un master en école (Ynov Campus Bordeaux).
              <br/><br/>
              Mes compétences incluent React, Next.JS, Typescript, SQL ainsi que plusieurs frameworks modernes et toute la stack à avoir pour être un développeur web en 2024 que vous pouvez retrouver sur mon CV disponible en téléchargement. J'aime relever des défis complexes, et je suis constamment à la recherche de nouvelles technologies pour améliorer mes compétences. 
              <br/><br/>
              Mon objectif est de créer des expériences utilisateurs fluides et intuitives, en mettant l'accent sur la performance, l'accessibilité, et la fonctionnalité. Que ce soit pour des projets personnels ou professionnels, je m'efforce de livrer un code propre, efficace et maintenable.
              <br/><br/>
              En dehors du développement, je suis aussi un gamer, un passionné de voitures, un amoureux de la nature et de camping en forêt :)
            </p>
          </TextCard>
        </div>
      </div>
      <div className="h-16"></div>
      <Footer className="ml-8" />
      </div>
  );
}

export default Home;
