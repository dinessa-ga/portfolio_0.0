import NavLinks from './NavLinks'
import PropTypes from 'prop-types'

function Nav({ isOpen, toggleNav }) 
{   return (
  <nav className={`bg-secondary text-base-100 h-screen w-full fixed top-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
    <NavLinks />
    <button onClick={toggleNav} className="absolute top-4 right-4 text-lg md:hidden">✕</button>
  </nav>
)
}

Nav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleNav: PropTypes.func.isRequired,
}

export default Nav
