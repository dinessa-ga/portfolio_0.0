import NavLinks from './NavLinks'
import PropTypes from 'prop-types'

function Header({ toggleNav }) {
  return (
    <header className="bg-primary text-base-100 p-4 flex justify-between items-center">
      <h1 className="text-4xl font-bold">Tu Nombre</h1>
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
