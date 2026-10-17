import React, { useState, useEffect } from 'react';

import { header } from '../data';
import Nav from '../components/Nav';
import NavMobile from '../components/NavMobile';
import { RiMenu4Fill, RiCloseFill } from 'react-icons/ri';

const Header = ({ onAuth }) => {
  const [isActive, setIsActive] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsActive(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { logo, btnLoginText, btnSignupText } = header;

  const openAuth = (mode) => {
    setNavMobile(false);
    onAuth(mode);
  };

  return (
    <header
      className={`${isActive ? 'bg-neutral-500 py-[16px]' : 'bg-transparent py-[20px]'} fixed max-w-[1440px] z-30 left-0 right-0 mx-auto flex justify-between items-center px-[20px] lg:px-[80px] transition-all duration-300`}
    >
      <a href="#home" aria-label="TheGymme home">
        <img className="h-[30px]" src={logo} alt="TheGymme" />
      </a>
      <Nav />

      <div className="hidden lg:flex space-x-4">
        <button type="button" onClick={() => openAuth('login')} className="btn btn-sm text-white hover:text-primary-200 transition">
          {btnLoginText}
        </button>
        <button type="button" onClick={() => openAuth('signup')} className="btn btn-sm btn-primary">
          {btnSignupText}
        </button>
      </div>

      <button
        type="button"
        aria-label={navMobile ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={navMobile}
        onClick={() => setNavMobile(!navMobile)}
        className="lg:hidden absolute right-4"
      >
        {navMobile ? (
          <RiCloseFill className="text-primary-200 text-3xl cursor-pointer" />
        ) : (
          <RiMenu4Fill className="text-primary-200 text-3xl cursor-pointer" />
        )}
      </button>

      <NavMobile
        navMobile={navMobile}
        onClose={() => setNavMobile(false)}
        onAuth={openAuth}
      />
    </header>
  );
};

export default Header;
