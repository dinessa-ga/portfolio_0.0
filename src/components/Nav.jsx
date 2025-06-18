import { useState } from 'react';
import NavLinks from './NavLinks';

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-dark w-full fixed top-0 left-0 z-50 shadow">
      <div className="max-w-6xl mx-auto flex justify-end px-4 py-3 items-center">
        {/* Botón de menú móvil */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-secondary focus:outline-none transition duration-200 md:hidden"
          >
            {open ? (
              // Ícono de cerrar (X)
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Ícono hamburguesa (=)
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Menú desktop */}
        <div className="hidden md:flex">
          <NavLinks className="flex space-x-6 items-center" />
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {open && (
        <div className="md:hidden transition-all duration-300 ease-in-out px-4 pb-4">
          <NavLinks className="flex flex-col space-y-2 bg-base-white backdrop-blur-md rounded-lg mt-2 shadow-lg" />
        </div>
      )}
    </nav>
  );
};

export default Nav;