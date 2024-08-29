import React from 'react';
import '../index.css';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import TextCard from '../components/TextCard';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="bg-slate-900 min-h-screen flex flex-col pb-[4rem]">
      <Navbar />
      <div className="flex-grow pt-[2rem]">
        <div className="flex justify-between">
          <div className="ml-[5rem]">
            <Card mt="mt-[9rem]" width="w-[43rem]" height="h-[27rem] text-lg" specialShadow={true}>
              <h1 className="ml-[10.5rem] text-5xl text-white font-light">Nouvelle Voix</h1>
              <br />
              <p className="text-slate-300">
                Je vous présente Nouvelle Voix, une association dédiée à la découverte et à la promotion des talents artistiques,
                particulièrement dans le <span className="text-blue-700">domaine musical.</span>
                <br></br>
                <br></br>
                Bien que je ne fasse pas partie de cette association, j'ai été impressionné par leur <span className="text-blue-700">engagement à soutenir les jeunes artistes</span> en leur offrant des opportunités uniques pour développer leur potentiel.
                <br></br>
                <br></br>
                Nouvelle Voix organise des <span className="text-blue-700">projets</span>,<span className="text-blue-700">ateliers</span> et <span className="text-blue-700">évènements</span> qui permettent aux artistes émergents de se perfectionner et de se faire connaître. L'association valorise la diversité et crée un environnement inclusif où chaque artiste peut s'épanouir.
              </p>
            </Card>
          </div>
          <div className="mr-[8rem] mt-[6rem] space-y-[2rem]">
            <h2 className="text-white text-6xl custom-underline2 mb-[5rem] font-light ml-[9rem]">
              William Mariamon
            </h2>
            <p className="text-slate-300 text-lg mt-[4] ">
              Étudiant en fin de 2ème année de Master Informatique à Ynov Campus, je suis passionné par le
              <br />
              développement web et 
              voici mon rapport de stage pour l'entreprise <a href="https://massyproduction.com/" target="_blank" rel="noopener noreferrer" className="custom-underline text-blue-500 hover:text-blue-300">Massy Productions</a>.
              <br />
              Dans ce rapport de stage/blog nous retrouvons :
            </p>
            <ul className="list-none ml-[12rem] mt-[1rem] space-y-4 text-xl ">
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
            <p className="text-slate-300 text-lg">
              Nous allons voir tout à travers ce site web qui contient mon blog, les différentes étapes de 
              <br>
              </br>
              mon stage chez Massy Productions et vous pourrez voir les différentes étapes 
              <br>
              </br>
              de la création du site pour l'association.
            </p>
          </div>
        </div>
        <div className="mt-[6rem] px-[8rem] mb-[4rem] space-y-8">
          <h2 className="text-slate-200 text-4xl mb-[3rem] ml-[38rem]">À propos de moi</h2>
          <TextCard>
            <p className="text-slate-300 text-lg">
              Je suis un développeur web passionné avec une expertise dans la création de sites web dynamiques. Mon parcours en informatique m'a permis d'acquérir une solide expérience en développement front-end et back-end. 
              <br/>
              <br/>
              Etudiant actuellement en préparation d'un master en école ( Ynov Campus Bordeaux).
              <br/>
              <br/>
              Mes compétences incluent React, Next.JS, Typescript, SQL ainsi que plusieurs frameworks modernes et toute la stack à avoir pour être un développeur web en 2024 que vous pouvez retrouver sur mon <a href="/cv.pdf" download="William_Mariamon_CV.pdf" className="text-blue-500 underline hover:text-white transition-colors duration-300">CV disponible</a> en téléchargement. J'aime relever des défis complexes, et je suis constamment à la recherche de nouvelles technologies pour améliorer mes compétences. 
              <br/>
              <br/>
              Mon objectif est de créer des expériences utilisateurs fluides et intuitives, en mettant l'accent sur la performance et l'accessibilité et la fonctionnalité. Que ce soit pour des projets personnels ou professionnels, je m'efforce de livrer un code propre, efficace et maintenable.
              <br/>
              <br/>
              En dehors du développement, je suis aussi un gamer, un passionné de voitures, un amoureux de la nature et de camping en forêt :)
            </p>
          </TextCard>
        </div>
      </div>
      <div className="h-[4rem]"></div>
      <Footer />
    </div>
  );
}

export default Home;
