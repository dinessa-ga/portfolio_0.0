
function Skills() {
  return (
    <section id="skills" className="my-8">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="text-left">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>HTML - CSS</strong></li>
            <li><strong>Material UI</strong></li>
            <li><strong>JavaScript</strong></li>
            <li><strong>Python</strong></li>
            <li><strong>Django</strong></li>
            <li><strong>Jest - Postman</strong></li>
          </ul>
        </div>
        <div className="text-left">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Node.js</strong></li>
            <li><strong>React - Next.js</strong></li>
            <li><strong>GitHub - Bitbucket - Git</strong></li>
            <li><strong>Firebase - Firestore</strong></li>
            <li><strong>SQL</strong></li>
            <li><strong>Figma</strong></li>
          </ul>
        </div>
        <div className="text-left">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Canva</strong></li>
            <li><strong>Notion</strong></li>
            <li><strong>Coda.io</strong></li>
            <li><strong>Trello</strong></li>
            <li><strong>Confluence</strong></li>
            <li><strong>Airtable</strong></li>
            <li><strong>Metodología Scrum</strong></li>
            <li><strong>SOLID</strong></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
