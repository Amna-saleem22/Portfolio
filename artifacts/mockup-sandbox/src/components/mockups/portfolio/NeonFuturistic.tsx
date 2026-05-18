import React, { useEffect, useState } from 'react';
import { Terminal, Code, Database, Layout, Smartphone, Globe, Mail, Github, Linkedin, ExternalLink, ChevronRight, Server, Cpu } from 'lucide-react';
import './_group.css';

export function NeonFuturistic() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['About', 'Skills', 'Services', 'Projects', 'Contact'];

  const skills = [
    { name: 'HTML', category: 'Frontend' },
    { name: 'CSS', category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'React', category: 'Frontend' },
    { name: 'Angular', category: 'Frontend' },
    { name: 'UI/UX', category: 'Design' },
    { name: 'Figma', category: 'Design' },
    { name: 'C#', category: 'Backend' },
    { name: 'ASP.NET MVC', category: 'Backend' },
    { name: 'PHP', category: 'Backend' },
    { name: 'Laravel', category: 'Backend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'MySQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
  ];

  const projects = [
    {
      title: 'Portfolio Website',
      desc: 'Personal developer portfolio built with React and custom CSS animations.',
      tech: ['React', 'CSS'],
    },
    {
      title: 'Electronic Shop',
      desc: 'Full-featured e-commerce platform for electronic devices.',
      tech: ['Angular', 'TypeScript', 'SCSS'],
    },
    {
      title: 'Laundry Management App',
      desc: 'Complete management system for laundry businesses with user and admin roles.',
      tech: ['ASP.NET MVC', 'Angular', 'SQL Server'],
    },
    {
      title: 'Web App with Login',
      desc: 'Secure authentication system integrated with a dynamic shopping cart.',
      tech: ['Node.js', 'Express', 'MongoDB'],
    },
    {
      title: 'Dynamic E-Commerce',
      desc: 'Scalable e-commerce solution with dynamic inventory and payments.',
      tech: ['Laravel', 'PHP', 'MySQL'],
    }
  ];

  const services = [
    { title: 'Full-Stack Development', icon: <Code size={32} /> },
    { title: 'UI/UX Design', icon: <Layout size={32} /> },
    { title: 'E-commerce', icon: <Globe size={32} /> },
    { title: 'Business Websites', icon: <Server size={32} /> },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-mono-cyber relative overflow-x-hidden selection:bg-[#00f5ff] selection:text-black">
      {/* Background elements */}
      <div className="fixed inset-0 bg-cyber-grid z-0"></div>
      <div className="scanline"></div>
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" style={{ background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(10,10,15,0.8) 100%)' }}></div>

      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0f]/90 backdrop-blur-md border-b border-[#00f5ff]/30 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-cyber font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] to-[#7b2fff] animate-gradient-x text-glow-cyan cursor-pointer">
            AMNA<span className="text-white">.SYS</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-sm uppercase tracking-wider text-gray-400 hover:text-[#00f5ff] transition-colors hover:text-glow-cyan">
                {link}
              </a>
            ))}
            <a href="#contact" className="px-5 py-2 border border-[#00f5ff] text-[#00f5ff] font-bold uppercase tracking-wider rounded-sm box-glow-cyan hover:bg-[#00f5ff] hover:text-black transition-all">
              Initialize
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center pt-20 px-6 container mx-auto">
          <div className="max-w-4xl">
            <div className="inline-block px-3 py-1 mb-6 border border-[#7b2fff] text-[#7b2fff] text-sm uppercase tracking-widest box-glow-purple bg-[#7b2fff]/10">
              System Online // User Identified
            </div>
            <h1 className="text-5xl md:text-7xl font-cyber font-black uppercase tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] via-white to-[#7b2fff] animate-gradient-x">
              Amna
            </h1>
            <div className="text-2xl md:text-4xl font-cyber text-[#00f5ff] mb-8 h-10">
              <div className="typing-effect inline-block pr-2">Full-Stack Web Developer</div>
            </div>
            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
              Software Engineering student crafting immersive digital experiences. Bridging the gap between front-end aesthetics and back-end logic.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-8 py-3 bg-[#00f5ff] text-black font-cyber font-bold uppercase tracking-widest box-glow-cyan hover:bg-white transition-colors flex items-center gap-2">
                View Log <ChevronRight size={18} />
              </a>
              <a href="#contact" className="px-8 py-3 border border-[#7b2fff] text-[#7b2fff] font-cyber font-bold uppercase tracking-widest box-glow-purple hover:bg-[#7b2fff] hover:text-white transition-all flex items-center gap-2">
                Connect <Terminal size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6 container mx-auto">
          <div className="glass-panel p-8 md:p-12 rounded-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#7b2fff] rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="grid md:grid-cols-2 gap-12 relative z-10">
              <div>
                <h2 className="text-3xl font-cyber font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-[#00f5ff] box-glow-cyan"></span>
                  Sys.Info
                </h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                  I am a passionate Software Engineering student with a strong foundation in full-stack web development. I thrive in building scalable, secure, and visually stunning web applications.
                </p>
                <div className="flex gap-4">
                  <a href="https://github.com/Amna-Saleem22" target="_blank" rel="noreferrer" className="p-3 border border-gray-700 hover:border-[#00f5ff] hover:text-[#00f5ff] transition-all hover:box-glow-cyan rounded bg-gray-900">
                    <Github size={24} />
                  </a>
                  <a href="https://linkedin.com/in/amna-saleem-it/" target="_blank" rel="noreferrer" className="p-3 border border-gray-700 hover:border-[#7b2fff] hover:text-[#7b2fff] transition-all hover:box-glow-purple rounded bg-gray-900">
                    <Linkedin size={24} />
                  </a>
                  <a href="mailto:saleemamna431@gmail.com" className="p-3 border border-gray-700 hover:border-[#00f5ff] hover:text-[#00f5ff] transition-all hover:box-glow-cyan rounded bg-gray-900">
                    <Mail size={24} />
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="border border-[#00f5ff]/30 p-6 flex flex-col justify-center items-center bg-[#00f5ff]/5 hover-glow-cyan transition-all rounded">
                  <div className="text-4xl font-cyber font-bold text-[#00f5ff] mb-2 text-glow-cyan">2+</div>
                  <div className="text-xs uppercase tracking-widest text-gray-400">Years Exp</div>
                </div>
                <div className="border border-[#7b2fff]/30 p-6 flex flex-col justify-center items-center bg-[#7b2fff]/5 hover-glow-purple transition-all rounded">
                  <div className="text-4xl font-cyber font-bold text-[#7b2fff] mb-2 text-glow-purple">15+</div>
                  <div className="text-xs uppercase tracking-widest text-gray-400">Projects</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-6 container mx-auto">
          <h2 className="text-3xl font-cyber font-bold text-white mb-12 uppercase tracking-widest flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#00f5ff] box-glow-cyan"></span>
            Tech.Stack
          </h2>
          
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, i) => (
              <div 
                key={i} 
                className="px-6 py-3 border border-gray-700 rounded-full bg-gray-900/80 hover:border-[#00f5ff] hover:text-[#00f5ff] transition-all hover:box-glow-cyan cursor-crosshair flex items-center gap-2 group"
              >
                <div className="w-2 h-2 rounded-full bg-gray-500 group-hover:bg-[#00f5ff] group-hover:box-glow-cyan transition-colors"></div>
                <span className="text-sm font-bold uppercase tracking-wider">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-6 container mx-auto">
          <h2 className="text-3xl font-cyber font-bold text-white mb-12 uppercase tracking-widest flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#7b2fff] box-glow-purple"></span>
            Services.Exec
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div key={i} className="glass-panel p-8 rounded-lg hover-glow-purple transition-all group cursor-pointer text-center md:text-left">
                <div className="text-[#7b2fff] mb-6 group-hover:text-glow-purple transition-all inline-block">
                  {service.icon}
                </div>
                <h3 className="text-xl font-cyber font-bold uppercase tracking-wide mb-3">{service.title}</h3>
                <div className="w-12 h-1 bg-gray-700 group-hover:bg-[#7b2fff] group-hover:box-glow-purple transition-all mx-auto md:mx-0"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6 container mx-auto">
          <h2 className="text-3xl font-cyber font-bold text-white mb-12 uppercase tracking-widest flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#00f5ff] box-glow-cyan"></span>
            Project.Logs
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="glass-panel rounded-lg overflow-hidden flex flex-col h-full hover-glow-cyan transition-all group">
                <div className="h-48 bg-gray-900 border-b border-gray-800 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')]"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-[#00f5ff]/20 group-hover:text-[#00f5ff]/40 transition-colors">
                    <Code size={64} />
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-cyber font-bold text-white mb-3 group-hover:text-[#00f5ff] transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 flex-1">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-[#00f5ff]/10 text-[#00f5ff] border border-[#00f5ff]/30 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                  <button className="text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-[#00f5ff] flex items-center gap-2 w-fit transition-colors">
                    Access <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 container mx-auto">
          <div className="glass-panel p-8 md:p-12 rounded-lg border-[#7b2fff]/30">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-cyber font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-[#7b2fff] box-glow-purple"></span>
                  Transmit.Data
                </h2>
                <p className="text-gray-400 mb-8">
                  Ready to initiate a new sequence? Send a transmission to my coordinates.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-gray-300 hover:text-[#7b2fff] transition-colors">
                    <div className="p-3 bg-gray-900 border border-gray-800 rounded text-[#7b2fff]">
                      <Mail size={20} />
                    </div>
                    <span className="text-sm md:text-base">saleemamna431@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-300 hover:text-[#7b2fff] transition-colors">
                    <div className="p-3 bg-gray-900 border border-gray-800 rounded text-[#7b2fff]">
                      <Github size={20} />
                    </div>
                    <span className="text-sm md:text-base">github.com/Amna-Saleem22</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-300 hover:text-[#7b2fff] transition-colors">
                    <div className="p-3 bg-gray-900 border border-gray-800 rounded text-[#7b2fff]">
                      <Linkedin size={20} />
                    </div>
                    <span className="text-sm md:text-base">linkedin.com/in/amna-saleem-it/</span>
                  </div>
                </div>
              </div>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="relative group">
                  <input type="text" className="w-full bg-gray-900 border border-gray-800 text-white p-4 focus:outline-none focus:border-[#7b2fff] focus:box-glow-purple transition-all peer placeholder-transparent" id="name" placeholder="Name" />
                  <label htmlFor="name" className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#7b2fff] bg-gray-900 px-1 uppercase tracking-wider">Alias</label>
                </div>
                <div className="relative group">
                  <input type="email" className="w-full bg-gray-900 border border-gray-800 text-white p-4 focus:outline-none focus:border-[#7b2fff] focus:box-glow-purple transition-all peer placeholder-transparent" id="email" placeholder="Email" />
                  <label htmlFor="email" className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#7b2fff] bg-gray-900 px-1 uppercase tracking-wider">Comms Link</label>
                </div>
                <div className="relative group">
                  <textarea rows={4} className="w-full bg-gray-900 border border-gray-800 text-white p-4 focus:outline-none focus:border-[#7b2fff] focus:box-glow-purple transition-all peer placeholder-transparent resize-none" id="message" placeholder="Message"></textarea>
                  <label htmlFor="message" className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#7b2fff] bg-gray-900 px-1 uppercase tracking-wider">Payload</label>
                </div>
                <button className="w-full py-4 bg-[#7b2fff] text-white font-cyber font-bold uppercase tracking-widest box-glow-purple hover:bg-white hover:text-black transition-colors">
                  Execute Transmission
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-[#00f5ff]/20 bg-[#0a0a0f]/80 backdrop-blur text-center">
          <div className="container mx-auto px-6">
            <div className="text-xl font-cyber font-bold text-white mb-4">
              AMNA<span className="text-[#00f5ff]">.SYS</span>
            </div>
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} // ALL SYSTEMS NOMINAL // END OF FILE
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}