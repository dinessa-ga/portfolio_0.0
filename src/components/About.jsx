function About() {
  return (
    <section id="about" className="my-8">
      <h2 id="about-title" className="text-4xl font-bold">About me</h2>
      <div
        id="about-info"
        className="flex flex-col md:flex-row items-center md:items-start gap-8 mt-6"
      >
        <div className="flex-1">
          <h3 className="text-2xl mt-4">Creando soluciones centradas en la experiencia de usuario</h3>
          <p className="text-2xl mt-4">
            Creo soluciones desde el análisis de procesos, tareas,
            diseños y la resolución de problemas.
            Mis años de experiencia en creación de contenido, conocimiento en diseño y desarrollo
            de aplicaciones web y móviles, me permiten crear soluciones centradas en la experiencia de
            usuario para diferentes tipos de negocios.
          </p>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="about_me/yo.png"
            className="mt-4 w-40 md:w-64 rounded-lg object-cover"
            alt="Sobre mí"
          />
        </div>
      </div>
    </section>
  );
}

export default About;