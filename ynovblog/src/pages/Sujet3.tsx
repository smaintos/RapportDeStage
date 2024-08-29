import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';
import Tooltip from '../components/Tooltip'; 
import { Link } from 'react-router-dom'; 
import { FaArrowRight } from 'react-icons/fa'; 

const Sujet3: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-900 min-h-screen flex flex-col pb-[4rem]">
      <Navbar />
      <BlogCard content="3. Découverte du CMS" className="mt-[1.5rem]" />
      <div className="flex-grow pt-[2rem] px-[4rem]">
        <h1 className="text-2xl font-bold text-white ml-[26.5rem] mt-[1rem]">Découverte de l'outil</h1>
        <br></br>
        <div className="mx-auto max-w-3xl">
          <div className="mb-[4rem] text-left">
            <p className="text-slate-300 text-lg mb-4">
              Alors, parlons un peu de WordPress. Si vous avez déjà entendu parler de WordPress, vous savez peut-être que c'est une plateforme qui permet de créer des sites web sans forcément écrire une seule ligne de code. 
              Un <Tooltip text="CMS" definition="Un Content Management System (CMS), ou Système de Gestion de Contenu, est un logiciel qui permet de créer et gérer du contenu sur un site web de manière simplifiée." /> comme WordPress est conçu pour rendre la création de sites web accessible à tout le monde.
            </p>
            <img src="/images/wordpress/logo.png" alt="Logo WordPress" className="mx-auto w-[20rem] h-[20rem] object-cover mb-4"/>
            <p className="text-slate-300 text-lg mb-4">
              C'est l'outil parfait pour les personnes qui veulent un site simple et rapide à mettre en place. WordPress propose une grande variété de thèmes préconçus, des mises en page que vous pouvez personnaliser selon vos besoins. Mais, comme tout, il y a des avantages et des inconvénients.
            </p>
          </div>
          <div className="mb-[4rem] text-left">
            <h2 className="text-2xl text-white mb-4 font-bold">Pourquoi je préfère le développement à la main</h2>
            <p className="text-slate-300 text-lg mb-4">
              Quand on développe un site à la main, on a la liberté totale. Chaque détail peut être personnalisé, chaque fonctionnalité peut être codée exactement comme on le souhaite. C'est un peu comme construire une maison en partant de rien : on choisit chaque matériau, chaque couleur, et on peut vraiment créer quelque chose d'unique.
            </p>
            <p className="text-slate-300 text-lg mb-4">
              Avec WordPress, c'est différent. Si vous voulez ajouter des fonctionnalités spécifiques, comme une boutique en ligne ou un système de réservation, il faut installer des <Tooltip text="plugins" definition="Les plugins sont des extensions que l'on ajoute à WordPress pour ajouter ou modifier des fonctionnalités du site, comme un module de sécurité, une galerie photo, ou encore un outil de SEO." />. Les plugins sont comme des petites extensions qui ajoutent des fonctionnalités à votre site. Mais attention, plus vous en installez, plus cela peut ralentir votre site, et tous les plugins ne sont pas toujours bien conçus ou compatibles entre eux.
            </p>
            <img src="/images/wordpress/extentions.png" alt="Tableau de bord WordPress" className="mx-auto w-[60rem] h-[20rem] object-cover rounded-lg shadow-lg mb-4"/>
            <p className="text-slate-300 text-lg mb-4">
              D'un autre côté, WordPress rend la gestion de la sécurité plus accessible grâce à ces plugins. Les plugins de sécurité peuvent gérer tout, des pare-feux aux sauvegardes automatiques. Cependant, cela a un inconvénient majeur : si un plugin présente une faille de sécurité, votre site entier peut devenir vulnérable. Il est donc essentiel de garder vos plugins à jour et de choisir des plugins fiables.
            </p>
            <p className="text-slate-300 text-lg mb-4">
              Et puis, quand on parle de développement <Tooltip text="back-end" definition="Le back-end fait référence à tout ce qui se passe en coulisses sur un site web, y compris la gestion des bases de données, les serveurs et la logique métier." />, WordPress n'est pas toujours l'idéal. Pour faire du back-end efficace sur WordPress, il faut souvent jongler avec plusieurs plugins et extensions, ce qui peut compliquer les choses. Et honnêtement, l'interface de développement de WordPress n'est pas la plus intuitive.
            </p>
          </div>
          <div className="mb-[4rem] text-left">
            <h2 className="text-2xl text-white mb-4 font-bold">Mon avis sur WordPress</h2>
            <p className="text-slate-300 text-lg mb-4">
              En résumé, WordPress est un excellent outil pour ceux qui veulent un site web sans trop se compliquer la vie. C'est rapide, pratique, et il y a une grande communauté pour vous aider. Mais si vous cherchez à créer un site vraiment unique avec des fonctionnalités sur-mesure, le développement à la main reste, à mon avis, la meilleure option.
            </p>
            <p className="text-slate-300 text-lg mb-4">
              C'est pour cette raison que, pour notre projet, nous avons décidé de combiner les deux approches : utiliser WordPress pour la gestion du contenu, mais développer à la main certaines parties du site pour avoir plus de liberté et de personnalisation.
            </p>
            <img src="/images/wordpress/horrible.png" alt="Site WordPress" className="mx-auto w-[80%] h-[20rem] object-cover rounded-lg shadow-lg mb-4"/>
          </div>
          <p className="text-slate-300 text-lg mb-4">
            Oui, je sais, c'est horrible présenté comme ça, mais avec le délai de durée de stage et la charge de travail, ce n'était pas si mal en fin de compte. Certes, l'<Tooltip text="IDE" definition="Un IDE (Integrated Development Environment) est un logiciel qui fournit des outils complets aux développeurs pour écrire, tester et déboguer du code." /> intégré n'est PAS PRATIQUE DU TOUT, 
            mais au moins toute la partie <Tooltip text="SEO" definition="Le SEO, ou Search Engine Optimization, est l'ensemble des techniques visant à améliorer le positionnement d'un site web dans les résultats des moteurs de recherche." />, redirection, sécurité, bah, on n'allait pas s'en occuper : tout était déjà fait grâce aux plugins. 
            Et surtout, pour l'association qui n'a pas forcément de développeur web parmi ses employés, l'outil est facile à prendre en main, 
            donc modifiable à l'infini même sans avoir de connaissances dans le domaine. Maintenant, on va donc parler de <Link to="/sujet-4" className="text-blue-500 hover:underline">la prochaine étape</Link>.
          </p>
        </div>
      </div>
      <div className="text-right ml-[75rem] mb-[2rem]">
        <Link to="/sujet-4" className="text-blue-500 font-bold">
           <FaArrowRight className="ml-2" />
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Sujet3;
