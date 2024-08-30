

function Nav() {
  return (
    <nav className="bg-secondary text-base-100 h-screen w-full flex flex-col items-center justify-center">
      <ul className="space-y-4">
        <li><a href="#about" className="text-xl">About</a></li>
        <li><a href="#projects" className="text-xl">Projects</a></li>
        <li><a href="#skills" className="text-xl">Skills</a></li>
        {/* <li><a href="#contact" className="text-xl">Contact</a></li> */}
      </ul>
    </nav>
  );
}

export default Nav;
