import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={`pt-[4rem] pb-[2rem] bg-slate-900 text-gray-400 ${className}`}>
      <ul className="flex justify-center space-x-[3rem] text-lg">
        <li>
          <Link to="/" className="hover:text-white transition-colors duration-300">
            Accueil
          </Link>
        </li>
        <li>
          <Link to="https://massyproduction.com/" className="hover:text-white transition-colors duration-300">
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
      <div className="mt-[2rem] text-center text-sm text-gray-500">
        © 2024 William Mariamon. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
