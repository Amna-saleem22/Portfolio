import React from 'react';
import { Mail, Github, Linkedin, ExternalLink, Code2, PenTool, LayoutTemplate, Briefcase, ChevronRight, Download } from 'lucide-react';
import './_group.css';

export function ElegantDark() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f13] text-gray-300 font-sans-elegant selection:bg-amber-500/30 overflow-x-hidden relative">
      {/* Background Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-amber-600/10 blur-[120px] animate-float-1 pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-5%] w-[35vw] h-[35vw] rounded-full bg-orange-600/10 blur-[100px] animate-float-2 pointer-events-none z-0" />
      <div className="fixed top-[40%] left-[60%] w-[25vw] h-[25vw] rounded-full bg-amber-400/5 blur-[80px] animate-float-3 pointer-events-none z-0" />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass-panel-elegant border-b-0 border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="font-serif-elegant text-2xl font-bold tracking-wider text-white">
            AM<span className="text-amber-500">NA</span>
          </div>
          <div className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-wide">
            {['About', 'Skills', 'Services', 'Projects'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="hover:text-amber-400 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-amber-500 transition-all group-hover:w-full duration-300" />
              </button>
            ))}
          </div>
          <button 
            onClick={() => scrollTo('contact')}
            className="hidden md:flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]"
          >
            Let's Talk
          </button>
        </div>
      </nav>

      <main className="relative z-10 pt-24">
        {/* Hero Section */}
        <section className="min-h-[90vh] flex items-center max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center w-full">
            <div className="space-y-8 relative z-10">
              <div className="inline-block px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-sm font-medium uppercase tracking-widest backdrop-blur-md">
                Full-Stack Developer
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif-elegant font-bold text-white leading-[1.1]">
                Crafting <br />
                <span className="text-gradient-gold italic">Digital</span><br />
                Experiences.
              </h1>
              <p className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed font-light">
                I'm Amna, a Software Engineering student and Web Developer specializing in building exceptional digital experiences that live on the internet.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button onClick={() => scrollTo('projects')} className="px-8 py-4 bg-white text-black hover:bg-gray-100 font-semibold rounded-full transition-all duration-300 flex items-center gap-2 group">
                  View Work
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 glass-panel-elegant text-white hover:text-amber-400 font-semibold rounded-full transition-all duration-300 flex items-center gap-2 group border border-white/10">
                  <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                  Resume
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent rounded-[2rem] blur-2xl animate-pulse"></div>
              <img 
                src="/__mockup/images/hero-abstract.png" 
                alt="Abstract Geometric Design" 
                className="w-full h-auto rounded-[2rem] border border-white/10 shadow-2xl relative z-10 object-cover aspect-square hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 bg-[#13131a]/50 relative border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5">
                <h2 className="text-4xl md:text-5xl font-serif-elegant font-bold text-white mb-8">
                  Engineering <br/> <span className="text-gradient-gold">with purpose.</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  As a Software Engineering student, I combine academic rigor with practical development experience. My focus is on creating scalable, efficient architectures alongside intuitive user interfaces.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed mb-10">
                  I believe in writing clean code and designing systems that are maintainable and user-centric, bridging the gap between design and complex backend logic.
                </p>
                <div className="flex gap-4">
                  <a href="https://github.com/Amna-Saleem22" className="p-4 rounded-full glass-panel-elegant hover:bg-amber-500/10 hover:text-amber-500 transition-all duration-300 group">
                    <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="https://linkedin.com/in/amna-saleem-it/" className="p-4 rounded-full glass-panel-elegant hover:bg-amber-500/10 hover:text-amber-500 transition-all duration-300 group">
                    <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="mailto:saleemamna431@gmail.com" className="p-4 rounded-full glass-panel-elegant hover:bg-amber-500/10 hover:text-amber-500 transition-all duration-300 group">
                    <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
                {[
                  { value: '2+', label: 'Years Experience' },
                  { value: '15+', label: 'Projects Completed' },
                  { value: '12+', label: 'Technologies Mastered' },
                  { value: '100%', label: 'Commitment' }
                ].map((stat, i) => (
                  <div key={i} className="glass-panel-elegant p-10 rounded-3xl flex flex-col justify-center transition-all duration-300 hover:-translate-y-2">
                    <div className="text-5xl font-serif-elegant font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-amber-500 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-serif-elegant font-bold text-white mb-6">Technical <span className="text-gradient-gold italic">Arsenal</span></h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">A comprehensive toolkit spanning the full stack, allowing me to build robust applications from database design to the pixel-perfect UI.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Frontend',
                  icon: <LayoutTemplate className="w-8 h-8 text-amber-400 mb-6" />,
                  skills: ['HTML/CSS', 'JavaScript', 'React', 'Angular', 'Tailwind']
                },
                {
                  title: 'Backend',
                  icon: <Code2 className="w-8 h-8 text-amber-400 mb-6" />,
                  skills: ['C#', 'ASP.NET MVC', 'PHP', 'Laravel', 'Node.js']
                },
                {
                  title: 'Database & Design',
                  icon: <PenTool className="w-8 h-8 text-amber-400 mb-6" />,
                  skills: ['MySQL', 'MongoDB', 'UI/UX', 'Figma']
                }
              ].map((category, i) => (
                <div key={i} className="glass-panel-elegant p-10 rounded-[2rem] group transition-all duration-500 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] hover:-translate-y-2">
                  {category.icon}
                  <h3 className="text-2xl font-serif-elegant font-bold text-white mb-8 group-hover:text-amber-400 transition-colors">{category.title}</h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, j) => (
                      <span key={j} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300 transition-all hover:bg-amber-500/20 hover:text-white hover:border-amber-500/50">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 bg-[#13131a]/50 relative border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div>
                <h2 className="text-4xl md:text-6xl font-serif-elegant font-bold text-white mb-6">Areas of <span className="text-gradient-gold italic">Expertise</span></h2>
                <p className="text-gray-400 max-w-xl text-lg">Delivering end-to-end solutions that drive business growth and user engagement.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Full-Stack Development', desc: 'Building robust, scalable applications from database architecture to responsive frontend interfaces.', icon: <Code2 className="w-6 h-6" /> },
                { title: 'UI/UX Design', desc: 'Creating intuitive, engaging, and accessible user experiences that delight users and meet business goals.', icon: <PenTool className="w-6 h-6" /> },
                { title: 'E-commerce Solutions', desc: 'Developing secure, high-performance online stores with complex features like custom auth and cart systems.', icon: <Briefcase className="w-6 h-6" /> },
                { title: 'Business Websites', desc: 'Crafting premium digital presences that effectively communicate brand value and convert visitors.', icon: <LayoutTemplate className="w-6 h-6" /> }
              ].map((service, i) => (
                <div key={i} className="glass-panel-elegant p-12 rounded-[2rem] flex items-start gap-6 group transition-all duration-300 hover:bg-white/5">
                  <div className="p-4 rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/20 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif-elegant font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-serif-elegant font-bold text-white mb-6">Selected <span className="text-gradient-gold italic">Works</span></h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">A showcase of recent projects demonstrating technical proficiency and design sensibility.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Electronic Shop',
                  desc: 'A comprehensive angular-based e-commerce platform with dynamic product routing, state management, and responsive design.',
                  tech: ['Angular', 'TypeScript', 'SCSS'],
                  color: 'from-blue-600/20 to-purple-600/20'
                },
                {
                  title: 'Laundry Management App',
                  desc: 'Full-stack enterprise solution bridging ASP.NET MVC backend with an Angular frontend for seamless operations management.',
                  tech: ['ASP.NET MVC', 'Angular', 'SQL Server'],
                  color: 'from-teal-600/20 to-emerald-600/20'
                },
                {
                  title: 'Web App with Auth & Cart',
                  desc: 'Secure application featuring custom authentication flows, protected routes, and a complex state-managed shopping cart.',
                  tech: ['React', 'Node.js', 'MongoDB'],
                  color: 'from-amber-600/20 to-red-600/20'
                },
                {
                  title: 'Dynamic E-Commerce',
                  desc: 'Modern online store focusing on performance, SEO, and conversion optimization with a sleek user interface.',
                  tech: ['React', 'Tailwind CSS', 'Express'],
                  color: 'from-pink-600/20 to-rose-600/20'
                }
              ].map((project, i) => (
                <div key={i} className="group relative rounded-[2rem] overflow-hidden glass-panel-elegant transition-all duration-500 hover:-translate-y-2">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                  
                  <div className="p-12 relative z-10 h-full flex flex-col">
                    <div className="mb-8">
                      <h3 className="text-3xl font-serif-elegant font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">{project.title}</h3>
                      <p className="text-gray-400 leading-relaxed text-lg">{project.desc}</p>
                    </div>
                    
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((t, j) => (
                          <span key={j} className="text-xs font-semibold uppercase tracking-wider text-amber-500/80 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                            {t}
                          </span>
                        ))}
                      </div>
                      <a href="#" className="inline-flex items-center gap-2 text-white font-semibold group/link hover:text-amber-400 transition-colors">
                        View Project
                        <ExternalLink className="w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 bg-[#13131a]/50 relative border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-7xl font-serif-elegant font-bold text-white mb-8">
              Let's create something <br/>
              <span className="text-gradient-gold italic">extraordinary.</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
              Currently available for freelance opportunities and open to discussing new software engineering roles.
            </p>
            
            <a href="mailto:saleemamna431@gmail.com" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-black hover:bg-amber-400 hover:text-black font-semibold rounded-full transition-all duration-300 text-lg group mb-20">
              <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              saleemamna431@gmail.com
            </a>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="glass-panel-elegant p-10 rounded-[2rem]">
                <h3 className="text-2xl font-serif-elegant font-bold text-white mb-6">Socials</h3>
                <div className="space-y-4">
                  <a href="https://github.com/Amna-Saleem22" className="flex items-center gap-4 text-gray-400 hover:text-amber-400 transition-colors group">
                    <div className="p-3 rounded-full bg-white/5 group-hover:bg-amber-500/20 transition-colors"><Github className="w-5 h-5" /></div>
                    <span className="font-medium">github.com/Amna-Saleem22</span>
                  </a>
                  <a href="https://linkedin.com/in/amna-saleem-it/" className="flex items-center gap-4 text-gray-400 hover:text-amber-400 transition-colors group">
                    <div className="p-3 rounded-full bg-white/5 group-hover:bg-amber-500/20 transition-colors"><Linkedin className="w-5 h-5" /></div>
                    <span className="font-medium">linkedin.com/in/amna-saleem-it</span>
                  </a>
                </div>
              </div>
              <div className="glass-panel-elegant p-10 rounded-[2rem]">
                <h3 className="text-2xl font-serif-elegant font-bold text-white mb-6">Details</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-sm uppercase tracking-wider text-gray-500 mb-1">Role</div>
                    <div className="text-white font-medium">Software Engineering Student & Dev</div>
                  </div>
                  <div>
                    <div className="text-sm uppercase tracking-wider text-gray-500 mb-1">Status</div>
                    <div className="text-white font-medium flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      Available for hire
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-white/5 text-center">
          <div className="font-serif-elegant text-2xl font-bold tracking-wider text-white mb-6">
            AM<span className="text-amber-500">NA</span>
          </div>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Amna. All rights reserved. <br/>
            Designed with elegance and coded with passion.
          </p>
        </footer>
      </main>
    </div>
  );
}
