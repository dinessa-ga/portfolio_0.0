
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

const skillsData = [
  { name: 'Python', icon: <FaPython className="text-yellow-500 w-12 h-12" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600 w-12 h-12" /> },
  { name: 'React', icon: <FaReact className="text-blue-500 w-12 h-12" />},
  { name: 'Next.js', icon: <SiNextdotjs className="text-black w-12 h-12" /> },
  { name: 'GitHub - Bitbucket', icon: <FaGithub className="text-gray-700 w-12 h-12" /> },
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
  return (
    <section id="skills" className="py-16  min-w-full text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Habilidades</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => (
            <div key={index} className="flex flex-col items-center justify-center hover:scale-110 transition-transform">
              {skill.icon}
              {skill.extra && <div className="mt-2">{skill.extra}</div>}
              <span className="mt-2 text-lg font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;