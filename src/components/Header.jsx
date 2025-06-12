import NavLinks from './NavLinks'
import PropTypes from 'prop-types'

function Header({ toggleNav }) {
  return (
    <header className="bg-primary text-base-100 p-4 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      <h1 className="text-4xl font-bold ml-12">Diana Guaiña</h1>
      <nav className="hidden md:flex">
        <NavLinks />
      </nav>
      <button onClick={toggleNav} className="md:hidden text-lg">☰</button>
    </header>
  )
}

Header.propTypes = {
  toggleNav: PropTypes.func.isRequired,
}

export default Header

/* Para que el Header quede fijo en la parte superior, agrega la clase 'fixed top-0 left-0 w-full z-50' al header. 
Puedes modificar la clase del header así: */

 // Reemplaza la línea del header por esta:
 // <header className="fixed top-0 left-0 w-full z-50 bg-primary text-base-100 p-4 flex justify-between items-center">

// Si prefieres, puedes dejar un comentario aquí para recordar el cambio:
 // El Header ahora es fijo en la parte superior usando Tailwind CSS.