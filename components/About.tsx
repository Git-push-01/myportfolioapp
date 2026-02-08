export default function About() {
  const education = [
    {
      school: 'Flatiron School',
      location: 'New York, NY',
      degree: 'Certificate of Full Stack Software Engineering',
    },
    {
      school: 'Union County College',
      location: 'Cranford, NJ',
      degree: 'Associate Degree in Computer Science',
    },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">
          <span className="gradient-text">About Me</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Who I Am</h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              Frontend Developer and MarTech Specialist with expertise in building 
              scalable marketing technology solutions. I specialize in developing data-driven 
              applications, integrating marketing platforms, and creating seamless user experiences 
              that drive business growth.
            </p>
            <p className="text-slate-600 leading-relaxed">
              With a strong foundation in Computer Science, I bring a detail-oriented approach 
              to problem-solving and a passion for learning new technologies. I excel in 
              JavaScript, React, TypeScript, Node.js, Ruby on Rails, and various marketing 
              automation tools.
            </p>
          </div>

          {/* Education */}
          <div className="card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-6 border-l-2 border-slate-200 hover:border-primary transition-colors"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-primary" />
                  <h4 className="font-semibold text-slate-800">{edu.school}</h4>
                  <p className="text-primary text-sm">{edu.location}</p>
                  <p className="text-slate-500 text-sm mt-1">{edu.degree}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { number: '10+', label: 'Projects Completed' },
            { number: '5+', label: 'Years Experience' },
            { number: '15+', label: 'Technologies' },
            { number: '100%', label: 'Dedication' },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 card">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-slate-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
