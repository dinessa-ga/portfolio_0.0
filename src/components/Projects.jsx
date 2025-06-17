
const projects = [
  {
    title: 'Mi portafolio en inglés',
    image: 'projects1/homepage-cv.png',
    description: 'En el proyecto se aplica arquitectura CSS de BEM.',
    link: 'https://dinessa-ga.github.io/homepage/'
  },
  {
    title: 'Social Network',
    image: 'projects1/beat-app.png',
    description: 'Beat, primer proyecto aplicando UX design, reviews de música.',
    link: 'https://github.com/dinessa-ga/DEV003-social-network'
  },
  {
    title: 'Bluetab - Human Resources',
    image: 'projects1/bluetab.png',
    description: 'Formulario y Chatbot para la búsqueda y formación de equipos de trabajo.',
    link: 'https://github.com/dinessa-ga/Bluetab_desarrollo'
  },
  //Agrega más proyectos según sea necesario
  {
    title: 'Proyecto guiado por CCI',
    image: 'projects1/cci1.png',
    description: 'Automatización mediante IA con principios sólidos de ingeniería de software. ',
    link: 'https://github.com/dinessa-ga/LLM-benchmark-frontend'},
  {
    title: 'Librería Online',
    image: 'projects1/bookstore.png',
    description: 'Librería Online, proyecto en Vite.js con Redux.',
    link: 'https://github.com/dinessa-ga/book-app-frontend'
  },
  {
    title: 'Validador de Tarjetas de Crédito',
    image: 'projects1/card-validation.png',
    description: 'Descripción del Proyecto 4.',
    link: 'https://github.com/dinessa-ga/DEV003-card-validation_Dinessa'
  },
];

function Projects() {
  return (
    <section id="projects" className="mt-8 ">
      <h2 className="text-3xl font-bold mb-4">Proyectos</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project, index) => (
          <div key={index} className="bg-base-white shadow-md rounded-md overflow-hidden">
            <img src={project.image} className="w-full h-48 object-cover" />
            <div className="p-4     ">
              <h3 className="text-secondary font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer"> 
                <button className="bg-primary text-white px-4 py-2 rounded hover:bg-neutral_dark transition duration-300">
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

