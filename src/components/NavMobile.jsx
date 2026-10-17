import React from 'react';
import { nav } from '../data';

const NavMobile = ({ navMobile, onClose, onAuth }) => {
  return (
    <nav
      aria-label="Mobile navigation"
      className={`${navMobile ? 'h-screen opacity-100 pointer-events-auto' : 'h-0 opacity-0 pointer-events-none'} lg:hidden w-full bg-neutral-500 fixed top-0 left-0 right-0 bottom-0 -z-10 overflow-hidden transition-all duration-300`}
    >
      <div className="min-h-full flex flex-col justify-center items-center py-24">
        <ul className="w-full flex flex-col justify-center items-center gap-y-8">
          {nav.map((item, idx) => (
            <li key={item.href || idx}>
              <a
                className="text-white text-body-md"
                href={item.href}
                onClick={onClose}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex justify-center gap-x-8">
          <button type="button" onClick={() => onAuth('login')} className="btn btn-lg text-white">
            Log in
          </button>
          <button type="button" onClick={() => onAuth('signup')} className="btn btn-lg btn-primary">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavMobile;
