
// const skills = [
//   'Python',
//   'Node.js',
//   'React - Next.js',
//   'GitHub - Bitbucket - Git',
//   'Firebase - Firestore',
//   'SQL',
//   'Figma - Canva',
//   'Trello',
//   'Confluence - Jira',
//   'Airtable',
//   'Metodología Scrum',
//   'SOLID'
// ];

// function Skills() {
//   return (
//     <section id="skills" className="my-8">
//       <h2 className="text-3xl font-bold mb-4">Skills</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
//         {skills.map((skill, index) => (
//           <div key={index} className="flex items-center space-x-4">
//             <span className="text-xl font-semibold">{skill}</span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Skills;


import React from 'react';
import { FaPython, FaNodeJs, FaReact, FaGithub, FaDatabase, FaFigma, FaTrello, FaJira } from 'react-icons/fa';
import { SiNextdotjs, SiBitbucket, SiFirebase, SiCanva, SiConfluence, SiAirtable } from 'react-icons/si';
import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const skillsData = [
  { name: 'Python', icon: <FaPython className="text-yellow-500 w-12 h-12" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600 w-12 h-12" /> },
  { name: 'React', icon: <FaReact className="text-blue-500 w-12 h-12" />},
  { name: 'Next.js', icon: <SiNextdotjs className="text-gray-300 w-12 h-12" /> },
  { name: 'GitHub', icon: <FaGithub className="text-gray-300 w-12 h-12" /> },
  {name: 'Bitbucket', icon: <SiBitbucket className="text-blue-600 w-12 h-12" /> },
  { name: 'Firebase - Firestore', icon: <SiFirebase className="text-yellow-500 w-12 h-12" /> },
  { name: 'SQL', icon: <FaDatabase className="text-purple-500 w-12 h-12" /> },
  { name: 'Figma', icon: <FaFigma className="text-pink-500 w-12 h-12" /> },
  { name: 'Canva', icon: <SiCanva className="text-blue-400 w-12 h-12" /> },
  { name: 'Trello', icon: <FaTrello className="text-blue-600 w-12 h-12" /> },
  { name: 'Confluence', icon: <SiConfluence className="text-blue-500 w-12 h-12" />},
  { name: 'Jira', icon: <FaJira className="text-blue-700 w-12 h-12" /> },
  { name: 'Airtable', icon: <SiAirtable className="text-red-500 w-12 h-12" /> },
  ];

const Skills = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 250;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="skills" className="py-16 min-w-full text-white bg-dark1">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Habilidades</h2>
        <div className="relative">
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-base-white/25 text-accent shadow-lg rounded-full p-2 hover:bg-accent hover:text-base-white transition border-2 border-accent"
            onClick={() => scroll('left')}
            aria-label="Scroll left"
            type="button"
          >
            <FaChevronLeft size={24} />
          </button>
          <div
            ref={carouselRef}
            className="flex overflow-x-auto gap-8 py-4 px-8 scrollbar-hide scroll-smooth"
            style={{
              scrollBehavior: 'smooth',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
            // Hide scrollbar for Chrome, Safari and Opera
            onWheel={e => e.preventDefault()}
          >
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col items-center justify-center w-40 hover:scale-110 transition-transform bg-neutral_dark/10 rounded-lg p-4"
              >
                {skill.icon}
                {skill.extra && <div className="mt-2">{skill.extra}</div>}
                <span className="mt-2 text-lg font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-base-white/25 text-accent shadow-lg rounded-full p-2 hover:bg-accent hover:text-base-white transition border-2 border-accent"
            onClick={() => scroll('right')}
            aria-label="Scroll right"
            type="button"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>
      <style>{`
        #skills .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        #skills .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Skills;