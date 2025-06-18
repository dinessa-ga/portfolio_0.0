const NavLinks = ({ className = '' }) => {
  const links = [
    // { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Servicios', href: '#services' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <ul className={className}>
      {links.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            className="text-secondary hover:text-dark1 transition block px-4 py-2"
          >
            {link.name}   
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;