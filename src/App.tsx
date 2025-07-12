import { useState, useEffect } from 'react';
import { GitBranch, MessageCircle, Download, Mail, ExternalLink, ChevronDown, Code, Database, Globe, Smartphone } from 'lucide-react';
import profileImg from './assets/Profile_Pic.jpg';

interface Skill {
    id: number;
    name: string;
    level: number;
    category: string;
}

interface Project {
    id: number;
    title: string;
    description: string;
    tech: string[];
    github: string;
    demo: string;
}

const TechPortfolio = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [skills, setSkills] = useState<Skill[]>([]);
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        setIsVisible(true);
        fetch('http://localhost:3001/skills')
            .then(res => res.json())
            .then(data => setSkills(data));

        fetch('http://localhost:3001/projects')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, []);

    const scrollToSection = (sectionId: string) => {
        setActiveSection(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white font-sans">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
                <div className="max-w-6xl mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">
                        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Portfolio
                        </div>
                        <div className="hidden md:flex space-x-8">
                            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                                <button
                                    key={section}
                                    onClick={() => scrollToSection(section)}
                                    className={`capitalize transition-colors hover:text-purple-400 ${
                                        activeSection === section ? 'text-purple-400' : 'text-white'
                                    }`}
                                >
                                    {section}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center justify-center px-4">
                <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="w-40 h-40 rounded-full mx-auto mb-8 bg-gradient-to-r from-purple-400 to-pink-400 p-1">
                        <div className="w-full h-full rounded-full overflow-hidden bg-black">
                            <img
                                src={profileImg}
                                alt="Himanjan Bora"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                        Senior Salesforce Developer
                    </h1>
                    <p className="text-xl md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Passionate about coding  |  Aspiring Pianist  |  Bookworm
                    </p>
                    <div className="flex justify-center space-x-6 mb-12">
                        <a href="#" className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full transition-colors" onClick={() => scrollToSection('projects')}>
                            View My Work
                        </a>
                        <a href="/Resume_Himanjan%20Bora.pdf"
                            download="Himanjan_Bora_CV.pdf"
                            className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full transition-colors inline-flex items-center gap-2" >
                            <Download size={20} />
                            Download CV
                        </a>
                    </div>
                    <ChevronDown
                        size={32}
                        className="mx-auto animate-bounce cursor-pointer text-purple-400"
                        onClick={() => scrollToSection('about')}
                    />
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        About Me
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-lg text-gray-300 mb-6">
                                I'm a passionate full-stack developer with expertise in modern web technologies.
                                I love building scalable applications and solving complex problems with clean, efficient code.
                            </p>
                            <p className="text-lg text-gray-300 mb-6">
                                With experience in both frontend and backend development, I enjoy creating
                                seamless user experiences while ensuring robust server-side functionality.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                                    <GitBranch size={24} />
                                </a>
                                <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                                    <MessageCircle size={24} />
                                </a>
                                <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                                    <Mail size={24} />
                                </a>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
                                <Globe size={32} className="mx-auto mb-4 text-purple-400" />
                                <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                                <p className="text-gray-400">Modern, responsive websites</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
                                <Database size={32} className="mx-auto mb-4 text-purple-400" />
                                <h3 className="text-xl font-semibold mb-2">Backend Systems</h3>
                                <p className="text-gray-400">Scalable server solutions</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
                                <Smartphone size={32} className="mx-auto mb-4 text-purple-400" />
                                <h3 className="text-xl font-semibold mb-2">Mobile Apps</h3>
                                <p className="text-gray-400">Cross-platform solutions</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
                                <Code size={32} className="mx-auto mb-4 text-purple-400" />
                                <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
                                <p className="text-gray-400">Maintainable solutions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 px-4 bg-black/20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Technical Skills
                    </h2>
                    <div className="grid md:grid-cols-4 gap-4">
                        {skills.map((skill, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                                    <span className="text-sm text-purple-400">{skill.category}</span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-2">
                                    <div
                                        className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full transition-all duration-1000"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                                <div className="text-right mt-1">
                                    <span className="text-sm text-gray-400">{skill.level}%</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Featured Projects
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                                <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                                    <Code size={48} className="text-white" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                    <p className="text-gray-300 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech, techIndex) => (
                                            <span key={techIndex} className="bg-purple-600/50 text-purple-200 px-2 py-1 rounded-full text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex space-x-4">
                                        <a href={project.github} className="text-purple-400 hover:text-purple-300 transition-colors">
                                            <GitBranch size={20} />
                                        </a>
                                        <a href={project.demo} className="text-purple-400 hover:text-purple-300 transition-colors">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-4 bg-black/20">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Get In Touch
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Ready to collaborate? Let's build something amazing together.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="mailto:your.email@example.com"
                            className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full transition-colors inline-flex items-center gap-2">
                            <Mail size={20} />
                            Send Email
                        </a>
                        <a href="#" className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full transition-colors inline-flex items-center gap-2">
                            <MessageCircle size={20} />
                            Connect on LinkedIn
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-4 border-t border-white/10">
                <div className="max-w-6xl mx-auto text-center text-gray-400">
                    <p>&copy; 2025 Tech Portfolio. Built with React and passion.</p>
                </div>
            </footer>
        </div>
    );
};

export default TechPortfolio;