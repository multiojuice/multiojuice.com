import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { aboutImage } from "@/lib/images"
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Code, 
  Briefcase, 
  User,
  ArrowRight,
  ExternalLink
} from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-emerald-50 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-amber-600/10" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
                                            <div className="mx-auto h-32 w-32 rounded-full bg-gradient-to-r from-emerald-500 to-amber-600 p-1">
                <div className="h-full w-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://avatars.githubusercontent.com/u/23535069?s=400&u=ed0e31170a0e28d219a091b50ca7db8d591f24e4&v=4" 
                      alt="Owen's GitHub avatar" 
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
              Hey, I'm <span className="text-emerald-600">Owen</span>
            </h1>
            <p className="mt-6 text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              I'm an engineer from NJ in the NYC area. Psyched to be building at {" "}
                             <a 
                 href="https://titan.com" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-emerald-600 hover:text-emerald-700 underline inline-flex items-center"
               >
                titan.com
                <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </p>
            <div className="mt-6 flex items-center justify-center space-x-6 text-slate-600 dark:text-slate-400">
              <div className="flex items-center">
                <Code className="mr-2 h-4 w-4" />
                <span className="text-sm">Previously @ Recall.ai, Google, (Playstation, Apple, Intuit)</span>
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#projects">
                  <Briefcase className="mr-2 h-4 w-4" />
                  View My Work
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* About Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                About Me
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                I'm an engineer working in New York City, originally from New Jersey. Completed my BS/MS in Computer Science at Rochester Institute of Technology.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                Enjoying life with my wife and cats in New Jersey. Trying to spend time in the woods, by the water, and with my friends.
              </p>
              <div className="flex items-center text-slate-600 dark:text-slate-300">
                <MapPin className="mr-2 h-4 w-4" />
                <span>New York City/New Jersey</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-emerald-500/20 to-amber-500/20 rounded-2xl p-8">
              <div className="aspect-video bg-white/50 dark:bg-slate-800/50 rounded-xl overflow-hidden">
                <img 
                  src={aboutImage} 
                  alt="New Jersey" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Skills Section */}
      <section className="py-24 bg-amber-50/50 dark:bg-slate-800/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Here are some of the technologies and tools I work with on a daily basis.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Frontend Development", icon: Code, description: "React, Next.js, TypeScript, Tailwind CSS" },
              { title: "Backend Development", icon: Briefcase, description: "Node.js, Python, Java, C++, Express, SQL, NoSQL..." },
              { title: "DevOps & Tools", icon: Github, description: "AWS, Docker, CI/CD, Terraform, CDK, DB management, Datadog, etc." },
            ].map((skill, index) => (
                              <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                  <skill.icon className="h-8 w-8 text-emerald-600 mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  {skill.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Here are some of the projects I've worked on recently.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Project One", 
                description: "A modern web application built with React and Node.js",
                image: "bg-gradient-to-br from-emerald-400 to-emerald-600"
              },
              { 
                title: "Project Two", 
                description: "Mobile-first design system and component library",
                image: "bg-gradient-to-br from-amber-400 to-amber-600"
              },
              { 
                title: "Project Three", 
                description: "Full-stack e-commerce platform with real-time features",
                image: "bg-gradient-to-br from-green-600 to-green-800"
              },
            ].map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className={`${project.image} aspect-video rounded-xl mb-4 flex items-center justify-center text-white font-semibold`}>
                  Project Preview
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {project.description}
                </p>
                <Button variant="ghost" size="sm" className="p-0 h-auto">
                  View Project <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-amber-50/50 dark:bg-slate-800/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            I'm always interested in learning about what people are up to.
          </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" asChild>
                <a href="https://linkedin.com/in/multiojuice" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://github.com/multiojuice" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200 dark:border-slate-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-slate-600 dark:text-slate-400">
            <p>© 2024 Owen</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
