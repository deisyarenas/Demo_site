export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed]">
      {/* Header */}
      <header className="border-b border-[#2a2a2a] bg-[#0a0a0a]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Your Name
            </h1>
            <div className="flex gap-6">
              <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">
                About
              </a>
              <a href="#experience" className="text-sm text-gray-400 hover:text-white transition-colors">
                Experience
              </a>
              <a href="#education" className="text-sm text-gray-400 hover:text-white transition-colors">
                Education
              </a>
              <a href="#skills" className="text-sm text-gray-400 hover:text-white transition-colors">
                Skills
              </a>
              <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-[#1a1a1a] flex items-center justify-center text-4xl font-bold">
                YN
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Your Name
              </h1>
              <p className="text-2xl text-gray-400 mb-2">Software Engineer</p>
              <p className="text-gray-500">Building amazing things with code</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="mailto:your.email@example.com"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors font-medium"
            >
              Get in Touch
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="px-6 py-3 border border-[#2a2a2a] hover:border-gray-600 rounded-lg transition-colors font-medium"
            >
              Download Resume
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              className="px-6 py-3 border border-[#2a2a2a] hover:border-gray-600 rounded-lg transition-colors font-medium"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              className="px-6 py-3 border border-[#2a2a2a] hover:border-gray-600 rounded-lg transition-colors font-medium"
            >
              LinkedIn
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded"></span>
            About
          </h2>
          <div className="bg-[#1a1a1a] rounded-xl p-8 border border-[#2a2a2a]">
            <p className="text-gray-300 leading-relaxed mb-4">
              I'm a passionate software engineer with expertise in building scalable web applications
              and modern user interfaces. I love solving complex problems and turning ideas into
              reality through clean, efficient code.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open
              source projects, or sharing knowledge with the developer community.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded"></span>
            Experience
          </h2>
          <div className="space-y-6">
            <div className="bg-[#1a1a1a] rounded-xl p-8 border border-[#2a2a2a] hover:border-gray-700 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-1">Senior Software Engineer</h3>
                  <p className="text-blue-400">Company Name</p>
                </div>
                <span className="text-sm text-gray-500 mt-2 md:mt-0">Jan 2022 - Present</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Led development of scalable web applications serving 100K+ users</li>
                <li>Architected and implemented microservices using modern frameworks</li>
                <li>Mentored junior developers and conducted code reviews</li>
                <li>Improved application performance by 40% through optimization</li>
              </ul>
            </div>

            <div className="bg-[#1a1a1a] rounded-xl p-8 border border-[#2a2a2a] hover:border-gray-700 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-1">Software Engineer</h3>
                  <p className="text-blue-400">Previous Company</p>
                </div>
                <span className="text-sm text-gray-500 mt-2 md:mt-0">Jun 2020 - Dec 2021</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Developed and maintained React-based frontend applications</li>
                <li>Collaborated with cross-functional teams to deliver features</li>
                <li>Implemented automated testing and CI/CD pipelines</li>
              </ul>
            </div>

            <div className="bg-[#1a1a1a] rounded-xl p-8 border border-[#2a2a2a] hover:border-gray-700 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-1">Junior Developer</h3>
                  <p className="text-blue-400">First Company</p>
                </div>
                <span className="text-sm text-gray-500 mt-2 md:mt-0">Jan 2019 - May 2020</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Built responsive web applications using modern JavaScript frameworks</li>
                <li>Participated in agile development processes</li>
                <li>Fixed bugs and implemented new features based on requirements</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded"></span>
            Education
          </h2>
          <div className="bg-[#1a1a1a] rounded-xl p-8 border border-[#2a2a2a]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold mb-1">Bachelor of Science in Computer Science</h3>
                <p className="text-blue-400">University Name</p>
              </div>
              <span className="text-sm text-gray-500 mt-2 md:mt-0">2015 - 2019</span>
            </div>
            <p className="text-gray-300">
              Relevant coursework: Data Structures, Algorithms, Software Engineering, Database Systems,
              Web Development
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded"></span>
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a]">
              <h3 className="text-lg font-semibold mb-4 text-blue-400">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[#0a0a0a] border border-[#2a2a2a] rounded-full text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a]">
              <h3 className="text-lg font-semibold mb-4 text-blue-400">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[#0a0a0a] border border-[#2a2a2a] rounded-full text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a]">
              <h3 className="text-lg font-semibold mb-4 text-blue-400">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Docker', 'AWS', 'CI/CD', 'Linux', 'Agile'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[#0a0a0a] border border-[#2a2a2a] rounded-full text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a]">
              <h3 className="text-lg font-semibold mb-4 text-blue-400">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[#0a0a0a] border border-[#2a2a2a] rounded-full text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded"></span>
            Contact
          </h2>
          <div className="bg-[#1a1a1a] rounded-xl p-8 border border-[#2a2a2a]">
            <p className="text-gray-300 mb-6">
              I'm always open to discussing new opportunities, interesting projects, or just having
              a chat about technology. Feel free to reach out!
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors font-medium"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Me
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 border border-[#2a2a2a] hover:border-gray-600 rounded-lg transition-colors font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 border border-[#2a2a2a] hover:border-gray-600 rounded-lg transition-colors font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#2a2a2a] mt-20 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Your Name. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
