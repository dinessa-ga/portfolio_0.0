import { useState } from 'react';
import NavLinks from './NavLinks';

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-base-white text-secondary p-2 flex justify-between items-center fixed top-0 left-0 w-full z-50 shadow">
      <h1 className="text-3xl font-bold ml-12 text-neutral-dark">Diana Guaiña</h1>

      {/* Menú Desktop */}
      <div className="hidden md:flex">
        <NavLinks className="flex space-x-6 items-center" />
      </div>

      {/* Botón móvil */}
      <div className="md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="text-secondary focus:outline-none transition duration-200"
          aria-label="Menú móvil"
        >
          {open ? (
            // Ícono de cerrar
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Ícono de hamburguesa
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="absolute top-full left-0 w-full md:hidden px-4 pb-4 bg-base-white backdrop-blur-md rounded-b-lg shadow-lg mt-2">
          <NavLinks className="flex flex-col space-y-2" />
        </div>
      )}
    </header>
  );
}

export default Header;