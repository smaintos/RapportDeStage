import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';
import Tooltip from '../components/Tooltip';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa'; 

const Sujet4: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-900 min-h-screen flex flex-col pb-16">
      <Navbar />
      <BlogCard content="4. Back-end et ..." className="mt-6" />
      <div className="flex-grow pt-8 px-4 md:px-16 lg:px-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-2xl font-bold text-white mb-8">Le travail avec les Plugins</h1>
          <div className="mb-16 text-left">
            <p className="text-slate-300 text-lg mb-4">
              Bon, comme vous l'avez vu dans <Link to="/sujet-3" className="text-blue-500 hover:underline">l'article précédent</Link>, il n'y a pas eu beaucoup de back-end... Eh oui, c'était surtout du front-end en fait. WordPress gère tout le back-end ou du moins une grande partie du back-end à notre place, donc là ce n'était plus qu'un travail de recherche d'idées et de plugins. Vous avez la fenêtre où l'on écrit le code pour avoir les éléments qui s'affichent sur la page, mais ce n'est pas tout...
            </p>
          </div>
          <div className="mb-16 text-left">
            <h2 className="text-2xl text-white mb-4 font-bold">Elementor et les plugins de développement</h2>
            <img
              src="/images/wordpress/elementor.png"
              alt="Interface Elementor"
              className="w-full h-auto object-cover mb-4"
            />
            <p className="text-slate-300 text-lg mb-4">
              Oui, il y a des plugins qui servent à nous aider à moins coder. Dans le cas d'<Tooltip text="Elementor" definition="Elementor est un plugin WordPress populaire qui permet de créer des pages web en utilisant une interface visuelle de glisser-déposer, sans avoir besoin de coder." />, qui est un plugin permettant de remplacer des lignes de code par des actions, je m'explique :)
            </p>
            <p className="text-slate-300 text-lg mb-4">
              Par exemple, un bouton <em>Aller vers la galerie</em>, c'est du code que voici :
            </p>
            <div className="bg-slate-800 p-4 rounded-lg mb-4">
              <code className="text-slate-300">{"<button onClick={() => navigate('/gallery')}>Aller vers la galerie</button>"}</code>
            </div>
            <p className="text-slate-300 text-lg mb-4">
              Mais avec Elementor, c'est ça :
            </p>
            <img
              src="/images/wordpress/bouton.png"
              alt="Interface Elementor"
              className="mx-auto w-full h-auto object-cover rounded-lg shadow-lg mb-4"
            />
            <p className="text-slate-300 text-lg mb-4">
              Elementor permet donc de gagner du temps en simplifiant certaines tâches de développement, notamment pour ceux qui ne sont pas familiers avec le code.
            </p>
          </div>
          <div className="mb-16 text-left">
            <h2 className="text-2xl text-white mb-4 font-bold">Redirections et travail avec le CSS</h2>
            <p className="text-slate-300 text-lg mb-4">
              La majeure partie de notre travail a consisté à configurer des redirections dans des onglets déjà créés par WordPress. Nous avons placé des boutons et utilisé quelques lignes de code pour ajuster le design de la page. Les lignes de code que nous avons écrites ont surtout servi à quelques solutions de <Tooltip text="CSS" definition="Le CSS (Cascading Style Sheets) est un langage de style utilisé pour décrire la présentation d'un document écrit en HTML ou XML." /> pour, par exemple, superposer des images ou placer de petits boutons.
            </p>
          </div>
          <div className="mb-16 text-left">
            <h2 className="text-2xl text-white mb-4 font-bold">Optimisation du SEO avec Yoast</h2>
            <p className="text-slate-300 text-lg mb-4">
              Pour la partie <Tooltip text="SEO" definition="Le SEO (Search Engine Optimization) est l'ensemble des techniques visant à améliorer le positionnement d'un site web dans les résultats des moteurs de recherche." /> du site, nous avons utilisé le plugin Yoast SEO. Ce plugin est un outil essentiel pour ceux qui souhaitent améliorer le référencement de leur site sans plonger dans les détails techniques du SEO.
            </p>
            <p className="text-slate-300 text-lg mb-4">
              Yoast SEO analyse votre contenu et vous donne des conseils pour optimiser chaque page. Il vous aide à choisir les bons mots-clés, à structurer votre contenu, et à optimiser vos titres et méta descriptions. En plus, il vérifie la lisibilité de votre texte pour s'assurer qu'il est accessible à un large public.
            </p>
            <p className="text-slate-300 text-lg mb-4">
              Configurer Yoast SEO est simple : après avoir installé le plugin, vous accédez à chaque page ou article de votre site et suivez les recommandations fournies par l'outil. Yoast vous guide étape par étape pour vous assurer que votre contenu est bien optimisé pour les moteurs de recherche.
            </p>
            <img
              src="/images/wordpress/yoast.png"
              alt="Yoast SEO"
              className="mx-auto w-full h-auto object-cover rounded-lg shadow-lg mb-4"
            />
          </div>
          <div className="mb-16 text-left">
            <p className="text-slate-300 text-lg mb-4">
              Après avoir exploré les plugins et les outils disponibles, il est temps de conclure notre travail après avoir réfléchi à la manière dont nous avons réussi à combiner ces différents éléments pour créer un site fonctionnel et optimisé. On peut donc passer à la conclusion et au ressenti sur le projet, suivez <Link to="/sujet-5" className="text-blue-500 hover:underline">la prochaine étape</Link>.
            </p>
          </div>
        </div>
      </div>
      <div className="text-right mr-8 md:mr-16 lg:mr-32 mb-8">
        <Link to="/sujet-5" className="text-blue-500 font-bold">
           <FaArrowRight className="inline-block" />
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Sujet4;
