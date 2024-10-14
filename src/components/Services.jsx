
const services = [
  {
    title: 'Edición del CV',
    image: '',
    description: 'Mejora de la redacción del CV.',
    link: ''
  },{
    title: 'Asesoría de línea gráfica',
    image: '',
    description: 'Potenciando tu línea gráfica y creación de contenido',
    link: ''
  },
  {
    title: 'Asesoría de copywriting',
    image: '',
    description: 'Creando tu marca personal desde las palabras.',
    link: ''
  },
  {
    title: 'Creación de páginas web',
    image: '',
    description: 'Designing user-friendly interfaces and experiences.',
    link: ''
  },
  {
    title: 'Creación de landing page',
    image: '',
    description: 'Designing user-friendly interfaces and experiences.',
    link: ''
  },
  {
    title: 'Optimización de tu web',
    image: '',
    description: 'Desde el UX Writing y Copywriting.',
    link: ''
  }
];

const Services = () => {
  return (
    <section id="services">
      <h2 className="text-3xl font-bold mb-4">Servicios</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div key={index} className="bg-base-white shadow-md rounded-lg overflow-hidden">
            <img src={service.image} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-secondary font-bold mb-2">{service.title}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <a href={service.link} target="_blank" rel="noopener noreferrer">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                  Ver más
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;