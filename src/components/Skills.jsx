
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
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5 } from 'react-icons/fa';

const skillsData = [
  { name: 'React', icon: <FaReact className="text-blue-500 w-12 h-12" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600 w-12 h-12" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-400 w-12 h-12" /> },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500 w-12 h-12" /> },
];
  
const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-50 ">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Habilidades</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center hover:scale-110 transition-transform"
            >
              {skill.icon}
              <span className="mt-2 text-lg font-medium text-gray-800">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;