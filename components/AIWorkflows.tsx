const workflows = [
  {
    icon: '🔁',
    title: 'End-to-End Workflow Design',
    description:
      'Designing and implementing AI workflows with clearly defined stages: input collection, structured processing, and action or output delivery.',
  },
  {
    icon: '📋',
    title: 'Playbooks & Coding Standards',
    description:
      'Writing Markdown-based playbooks and coding standards that give AI tools the context they need to generate consistent, on-spec code across a project.',
  },
  {
    icon: '🔌',
    title: 'MCP Server Integration',
    description:
      'Integrating Model Context Protocol (MCP) servers into development pipelines to give language models structured access to project context, tools, and APIs.',
  },
  {
    icon: '⚙️',
    title: 'Cross-Layer Automation',
    description:
      'Building automation that spans CMS platforms, REST APIs, and frontend layers — reducing manual work and keeping data consistent across systems.',
  },
  {
    icon: '🛠️',
    title: 'Structured AI-Assisted Development',
    description:
      'Using tools like GitHub Copilot as part of a deliberate engineering workflow — with system prompts, project context, and defined conventions to get reliable output.',
  },
]

export default function AIWorkflows() {
  return (
    <section id="ai-workflows" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">
          <span className="gradient-text">AI Workflows &amp; Systems</span>
        </h2>
        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
          How I approach building systems that incorporate AI — not as a shortcut, but as a
          structured part of the engineering process.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflows.map((item) => (
            <div
              key={item.title}
              className="card group hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center text-2xl group-hover:bg-primary/20 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
