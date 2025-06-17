// function About() {
//   return (
//     <section id="about" className="my-8">
//       <h2 id="about-title" className="text-3xl font-bold">Sobre mí</h2>
//       <div
//         id="about-info"
//         className="flex flex-col md:flex-row items-center md:items-start gap-8 mt-6"
//       >
//         <div className="flex-1">
//           <h3 className="text-lg mt-4">Creando soluciones centradas en la experiencia de usuario</h3>
//           <p className="text-lg mt-4 ">
//             Creo soluciones desde el análisis de procesos, tareas,
//             diseños y la resolución de problemas.
//             Mis años de experiencia en creación de contenido, conocimiento en diseño y desarrollo
//             de aplicaciones web y móviles, me permiten crear soluciones centradas en la experiencia de
//             usuario para diferentes tipos de negocios.
//           </p>
//         </div>
//         <div className="flex-1 flex justify-center md:justify-end">
//           <img
//             src="about_me/yo.png"
//             className="mt-4 w-40 md:w-64 rounded-lg object-cover"
//             alt="Sobre mí"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;

// function About() {
//   return (
//     <section
//       id="about"
//       className="my-top-8 py-top-16 bg-cover bg-center relative"
//       style={{ backgroundImage: "url('/about_me/12.png')" }} // Cambia la ruta por la imagen que desees
//     >
//       {/* Capa oscura para mejorar la legibilidad */}
//       <div className="absolute inset-0 bg-secondary/75"></div>

//       <div className="relative max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-8">
//         <div id="about-info">
//         <div className="flex-1 text-white">
//           <h2 id="about-title" className="text-3xl font-bold">Sobre mí</h2>
//           <h3 className="text-lg mt-4">
//             Creando soluciones centradas en la experiencia de usuario
//           </h3>
//           <p className="text-lg mt-4">
//             Creo soluciones desde el análisis de procesos, tareas, diseños y la resolución de problemas.
//             Mis años de experiencia en creación de contenido, conocimiento en diseño y desarrollo
//             de aplicaciones web y móviles, me permiten crear soluciones centradas en la experiencia de
//             usuario para diferentes tipos de negocios.
//           </p>
//           </div>
//           <div className="flex gap-4 mt-6">
//             <a
//               href="https://wa.link/ulco9o"
//               className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               WhatsApp
//             </a>
//             <a
//               href="#contact"
//               className="bg-primary hover:bg-neutral_dark text-white px-4 py-2 rounded transition"
//             >
//               Contacto
//             </a>
//           </div>
//         </div>

        
//       </div>
//     </section>
//   );
// }

// export default About;

function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-cover overflow-hidden mt-0 pt-24"
      style={{ backgroundImage: "url('/about_me/12.png')" }} // Manteniendo tu imagen
    >
      {/* Capa oscura para mejorar la legibilidad */}
      <div className="absolute inset-0 bg-secondary/60"></div>

      <div className="relative max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-8">
        <div id="about-info" className="flex-1 text-white">
          <h2 id="about-title" className="text-3xl font-bold mt-10">Software Consultant and Developer</h2>
          <h3 className="text-lg mt-10">
            Creando soluciones centradas en la experiencia de usuario
          </h3>
          <p className="text-lg mt-10">
            Creo soluciones desde el análisis de procesos, tareas, diseños y la resolución de problemas.
            Mis años de experiencia en creación de contenido, conocimiento en diseño y desarrollo
            de aplicaciones web y móviles, me permiten crear soluciones para diferentes modelos de negocios.
          </p>
          <div className="flex gap-4 mt-10">
            <a
              href="https://wa.link/ulco9o"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a
              href="#contact"
              className="bg-primary hover:bg-neutral_dark text-white px-4 py-2 rounded transition"
            >
              Trabajemos juntos 
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;