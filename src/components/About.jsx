function About() {
  return (
    <section id="about" className="my-8">
      <h2 id="about-title" className="text-4xl font-bold">About me</h2>
      <div id="about-info">
      <div>
        <h3 className="text-2xl mt-4">Creando soluciones centradas en la experiencia de usuario</h3>
        <p className="text-2xl mt-4"   >Creo soluciones desde el análisis de procesos, tareas,
          diseños y la resolución de problemas.
          Mis años de experiencia en creación de contenido, conocimiento en diseño y desarrollo
          de aplicaciones web y móviles, me permiten crear soluciones centradas en la experiencia de
          usuario para diferentes tipos de negocios.
        </p>
      </div>
      <div>
        <img src="about_me/yo.png" className="mt-4" style={{ width: '600px' }} />
      </div>
      </div>
    </section>
  );
}

export default About;