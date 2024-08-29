import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'; 

const Sujet5: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-900 min-h-screen flex flex-col pb-16">
      <Navbar />
      
      <div className="flex-grow pt-8 px-4 md:px-16 lg:px-32">
        <h1 className="text-4xl text-white text-center mb-16">Conclusion</h1>

        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-left">
            <h2 className="text-2xl text-white mb-4 font-bold">Fin du stage</h2>
            <p className="text-slate-300 text-lg mb-4">
              Et voilà, on s'approche de la fin du stage. Le site est en grande partie terminé, il reste quelques détails à peaufiner. Toute la durée du stage s'est très bien passée. Chaque décision
              que mon collègue et moi avons prise a presque toujours été validée par l'association, car nous informions notre maître de stage de l'avancée et des différentes propositions que nous avions.
              Même si nous étions en télétravail, il était essentiel de tenir les clients informés. Après avoir finalisé les dernières retouches, nous avons livré le site sans dépasser les délais.
            </p>
          </div>
          <div className="mb-16 text-left">
            <h2 className="text-2xl text-white mb-4 font-bold">Ressenti</h2>
            <p className="text-slate-300 text-lg mb-4">
              Ce stage m'a permis de me confronter à des défis réels et de comprendre l'importance de l'adaptabilité dans un environnement de travail que je ne connaissais pas. Car oui, j'ai (un peu) critiqué WordPress tout au long de ce rapport de stage,
              mais j'avais bien été informé de la technologie qui allait être utilisée. J'ai accepté parce que dans le passé, j'avais déjà utilisé WordPress, et la conclusion que j'en tire est que c'était beaucoup plus simple avant. Eh oui,
              j'ai tenté de réessayer l'expérience de créer un site web avec un CMS et j'ai eu beaucoup de mal. Je me suis rendu compte que j'avais oublié beaucoup de choses et que j'avais perdu la main. Mais beaucoup d'autres CMS sont mieux adaptés, comme par exemple
              Webflow ou encore Wix. J'en retire tout de même du positif à reprendre en main un CMS, car ce sont toujours des compétences à acquérir. Cela me permet aussi de pouvoir aider d'autres personnes qui ne sont pas à l'aise avec ce genre de service.
            </p>
          </div>
          <div className="mb-16 text-left">
            <h2 className="text-2xl text-white mb-4 font-bold">Blog de stage</h2>
            <p className="text-slate-300 text-lg mb-4">
              Ce blog a été un excellent moyen de documenter mes progrès et de partager mes expériences tout au long de cette période. J'espère qu'il pourra servir de référence à d'autres stagiaires ou à ceux qui souhaitent en savoir plus sur le développement web via CMS.
              Quitte à parler de développement web, mon blog a été développé en React TypeScript et TailwindCSS. J'ai pris un grand plaisir à le faire et j'espère que vous avez pris autant de plaisir à le lire. Je ne sais pas encore ce qui va se passer pour la suite de ce blog,
              c'est avant tout mon rapport de stage, il n'est pas destiné à être mis à jour dans le temps. Mais l'univers du développement web est en constante évolution, et peut-être que je m'en servirai pour d'autres expériences.
            </p>
            <p className="text-slate-300 text-lg mb-4 italic">
              À retenir : Il y a de tout dans le développement. Je ne pense pas qu'il y ait une solution meilleure qu'une autre, tout dépend de ce qu'on veut en faire.
              J'ai utilisé ce rapport de stage pour montrer qu'il existe de nombreuses variantes de méthodes de développement en 2024, dont les CMS. Mon but n'était en aucun cas de dénigrer ces méthodes, mais plutôt de faire un retour d'expérience.
              Je pourrais en citer bien d'autres, mais le blog serait interminable.
            </p>
          </div>
          <div className="text-center">
            <Link to="/blog" className="text-blue-500 hover:underline text-lg font-bold">
              Revoir tous les articles
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Sujet5;
