
const projects = [
  {
    title: 'Mi portafolio en inglés',
    image: 'ruta/a/imagen1.jpg',
    description: 'Descripción del Proyecto 1.',
    link: 'https://enlaceproyecto1.com'
  },
  {
    title: 'Social Network',
    image: 'ruta/a/imagen2.jpg',
    description: 'Descripción del Proyecto 2.',
    link: 'https://enlaceproyecto2.com'
  },
  {
    title: 'Bluetab - Human Resources',
    image: 'ruta/a/imagen3.jpg',
    description: 'Descripción del Proyecto 3.',
    link: 'https://enlaceproyecto3.com'
  },
  // Agrega más proyectos según sea necesario
  {
    title: 'Pokedex',
    image: 'ruta/a/imagen4.jpg',
    description: 'Descripción del Proyecto 4.',
    link: 'https://enlaceproyecto4.com'
  },
  {
    title: 'Somos Dev',
    image: 'ruta/a/imagen4.jpg',
    description: 'Descripción del Proyecto 4.',
    link: 'https://enlaceproyecto4.com'
  },
  {
    title: 'Librería Online',
    image: 'ruta/a/imagen4.jpg',
    description: 'Descripción del Proyecto 4.',
    link: 'https://enlaceproyecto4.com'
  },
];

function Projects() {
  return (
    <section id="projects" className="my-8">
      <h2 className="text-3xl font-bold mb-4">Proyectos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-base-white shadow-md rounded-lg overflow-hidden">
            <img src={project.image} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-secondary font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                  Ver Proyecto
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

