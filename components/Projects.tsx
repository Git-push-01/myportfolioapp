'use client'

import Image from 'next/image'
import { useState } from 'react'

interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  image: string
  github: string
  live?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Codebase Explorer',
    description: 'A browser extension that bridges engineering and non-technical stakeholders. Visualizes codebase architecture through interactive graphs, surfaces git-blame and team ownership data, and integrates with Jira — turning complex codebases into navigable, shareable systems.',
    tech: ['TypeScript', 'React', 'Node.js', 'Chrome Extension', 'Cytoscape.js'],
    image: '/images/icon-codebase-explorer.svg',
    github: 'https://github.com/Git-push-01/codebase-explorer',
    featured: true,
  },
  {
    id: 2,
    title: 'AI Content Automator',
    description: 'An end-to-end automation pipeline that takes structured data from Excel/CSV files and creates populated Contentful pages via the Contentful API. Eliminates manual CMS entry by defining a clear input → transform → publish workflow.',
    tech: ['AI', 'Contentful API', 'Excel/CSV', 'Automation'],
    image: '/images/icon-ai-content.svg',
    github: 'https://github.com/Git-push-01/ai-content-automator',
    featured: true,
  },
  {
    id: 3,
    title: 'Finance Copilot',
    description: 'A fully local AI assistant for personal finance built on Ollama. Parses spending data, runs debt payoff projections, and answers budgeting questions — entirely offline, with no cloud dependencies or third-party logins.',
    tech: ['Python', 'Ollama', 'Local LLM', 'Shell'],
    image: '/images/icon-finance-copilot.svg',
    github: 'https://github.com/Git-push-01/FinanceCopilot',
    featured: true,
  },
  {
    id: 4,
    title: 'Agent Builder',
    description: 'A guided tool for defining, configuring, and deploying custom AI agents. Features a conversational build pipeline, structured configuration output, and Docker support — designed to make agent creation repeatable and portable.',
    tech: ['Next.js', 'TypeScript', 'Docker', 'AI'],
    image: '/images/icon-agent-builder.svg',
    github: 'https://github.com/Git-push-01/agent-builder',
    featured: true,
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'This site — built with Next.js, TypeScript, and Tailwind CSS, deployed via GitHub Pages. Structured as a component-based system with clean data separation so content and layout stay independently maintainable.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
    image: '/images/icon-portfolio.svg',
    github: 'https://github.com/Git-push-01/myportfolioapp',
    live: 'https://www.hugoescandon.dev/',
    featured: true,
  },
]

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'featured'>('all')

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.featured)

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">
          <span className="gradient-text">Featured Projects</span>
        </h2>
        <p className="text-center text-slate-400 max-w-2xl mx-auto mb-8">
          Projects focused on systems integration, workflow automation, and AI-driven pipelines.
        </p>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              filter === 'all'
                ? 'bg-primary text-white'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter('featured')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              filter === 'featured'
                ? 'bg-primary text-white'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Featured
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="card group overflow-hidden hover:scale-[1.02] transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/60 backdrop-blur-sm">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all"
                    aria-label="View GitHub"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all"
                      aria-label="View Live Demo"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View More Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Git-push-01"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <span>View All Projects on GitHub</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
