
const skills = [
  'Python',
  'Node.js',
  'React - Next.js',
  'GitHub - Bitbucket - Git',
  'Firebase - Firestore',
  'SQL',
  'Figma - Canva',
  'Trello',
  'Confluence - Jira',
  'Airtable',
  'Metodología Scrum',
  'SOLID'
];

function Skills() {
  return (
    <section id="skills" className="my-8">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center space-x-4">
            <span className="text-xl font-semibold">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
