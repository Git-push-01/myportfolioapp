'use client'

interface Skill {
  name: string
  icon: string
  category: 'frontend' | 'backend' | 'martech' | 'ai' | 'devops'
}

const skills: Skill[] = [
  // Frontend
  { name: 'JavaScript', icon: '🟨', category: 'frontend' },
  { name: 'TypeScript', icon: '🔷', category: 'frontend' },
  { name: 'React', icon: '⚛️', category: 'frontend' },
  { name: 'Next.js', icon: '▲', category: 'frontend' },
  { name: 'HTML5', icon: '🌐', category: 'frontend' },
  { name: 'CSS3', icon: '🎨', category: 'frontend' },
  { name: 'Tailwind CSS', icon: '💨', category: 'frontend' },
  // Backend
  { name: 'Node.js', icon: '🟢', category: 'backend' },
  { name: 'PostgreSQL', icon: '🐘', category: 'backend' },
  { name: 'MongoDB', icon: '🍃', category: 'backend' },
  { name: 'REST APIs', icon: '🔌', category: 'backend' },
  // MarTech & Analytics
  { name: 'Google Tag Manager', icon: '🏷️', category: 'martech' },
  { name: 'GA4', icon: '📊', category: 'martech' },
  { name: 'Google Ads', icon: '📢', category: 'martech' },
  { name: 'Stape.io', icon: '🖥️', category: 'martech' },
  { name: 'Adobe DataLayer', icon: '🔴', category: 'martech' },
  { name: 'Custom DataLayer', icon: '📦', category: 'martech' },
  { name: 'Braze', icon: '📧', category: 'martech' },
  { name: 'Segment', icon: '📈', category: 'martech' },
  { name: 'Amplitude', icon: '📉', category: 'martech' },
  // AI-Assisted Development
  { name: 'GitHub Copilot', icon: '🤖', category: 'ai' },
  { name: 'MCP Servers', icon: '🔌', category: 'ai' },
  { name: 'Claude', icon: '✨', category: 'ai' },
  { name: 'Ollama', icon: '🧠', category: 'ai' },
  { name: 'AI Workflow Design', icon: '🔁', category: 'ai' },
  // DevOps
  { name: 'Git', icon: '📦', category: 'devops' },
  { name: 'GitHub', icon: '🐙', category: 'devops' },
  { name: 'Netlify', icon: '🌐', category: 'devops' },
  { name: 'CI/CD', icon: '🔄', category: 'devops' },
]

const categories = [
  { id: 'frontend', label: 'Frontend Development', color: 'from-primary to-cyan-400' },
  { id: 'backend', label: 'Backend & Databases', color: 'from-secondary to-purple-400' },
  { id: 'martech', label: 'MarTech & Analytics', color: 'from-orange-500 to-amber-400' },
  { id: 'ai', label: 'AI-Assisted Development', color: 'from-pink-500 to-rose-400' },
  { id: 'devops', label: 'DevOps & Deployment', color: 'from-emerald-500 to-teal-400' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">
          <span className="gradient-text">Technical Skills</span>
        </h2>
        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
          Technologies and tools I work with across the full stack — from frontend interfaces
          to AI pipelines and data integrations.
        </p>

        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.id}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${category.color}`} />
                <h3 className="text-lg font-semibold text-slate-800">{category.label}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill) => (
                    <div
                      key={skill.name}
                      className="skill-badge flex items-center gap-2 hover:scale-105 transition-transform cursor-default"
                    >
                      <span className="text-lg">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Visualization */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="card text-center group hover:scale-105 transition-transform">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="font-semibold text-slate-800 mb-2">Frontend Development</h4>
            <p className="text-slate-500 text-sm">
              Building responsive, accessible, and performant user interfaces
            </p>
          </div>

          <div className="card text-center group hover:scale-105 transition-transform">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-500/5 flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h4 className="font-semibold text-slate-800 mb-2">MarTech & Analytics</h4>
            <p className="text-slate-500 text-sm">
              GTM, GA4, DataLayer architecture, and marketing integrations
            </p>
          </div>

          <div className="card text-center group hover:scale-105 transition-transform">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-pink-500/20 to-pink-500/5 flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h4 className="font-semibold text-slate-800 mb-2">AI-Assisted Development</h4>
            <p className="text-slate-500 text-sm">
              MCP servers, AI workflow design, and structured AI-first engineering practices
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
