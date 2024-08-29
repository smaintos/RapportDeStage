import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Sujet1 from './pages/Sujet1';
import Sujet2 from './pages/Sujet2';
import Sujet3 from './pages/Sujet3';
import Sujet4 from './pages/Sujet4';
import Sujet5 from './pages/Sujet5';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/sujet-1" Component={Sujet1} />
        <Route path="/sujet-2" Component={Sujet2} />
        <Route path="/sujet-3" Component={Sujet3} />
        <Route path="/sujet-4" Component={Sujet4} />
        <Route path="/sujet-5" Component={Sujet5} />
      </Routes>
    </Router>
  </React.StrictMode>
);
