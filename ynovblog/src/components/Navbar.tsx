import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons'; 

const Navbar: React.FC = () => {
  return (
    <nav className="pt-[2rem] flex justify-between items-center">
      <div className="ml-[2rem] flex items-center space-x-4">
        <a href="https://github.com/smaintos" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
          <FontAwesomeIcon icon={faGithub} size="2x" className="relative top-[-1rem]" />
        </a>
        <span className="text-white text-[1.5rem] font-light relative top-[-1.1rem]">William Mariamon</span>
      </div>

      <ul className="flex justify-center space-x-[3rem] text-gray-400 text-lg mr-[8rem]">
        <li>
          <Link to="/" className="hover:text-white transition-colors duration-300">
            Accueil
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-white transition-colors duration-300">
            L'association
          </Link>
        </li>
        <li>
          <Link to="/blog" className="hover:text-white transition-colors duration-300">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-white transition-colors duration-300">
            Contact
          </Link>
        </li>
      </ul>

      <div className="mr-[2rem]">
        <a href="/cv.pdf" download="William_Mariamon_CV.pdf" className="text-gray-400 hover:text-white transition-colors duration-300" title="Télécharger mon CV">
          <FontAwesomeIcon icon={faDownload} size="1x" className="relative top-[-1rem]" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
