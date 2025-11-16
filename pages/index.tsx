import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import ImagePlaceholder from '../components/ImagePlaceholder'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const skills = [
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'TypeScript', icon: '📝' },
    { name: 'JavaScript', icon: 'JS' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'Git', icon: '🌿' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'GraphQL', icon: '📊' },
    { name: 'REST API', icon: '🔗' }
  ]

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.',
      tech: ['Next.js', 'TypeScript', 'MongoDB', 'Stripe'],
      link: '#',
      github: '#',
      image: undefined // Will use placeholder
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team collaboration features.',
      tech: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
      link: '#',
      github: '#',
      image: undefined
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather dashboard with location-based forecasts and interactive maps.',
      tech: ['Next.js', 'TypeScript', 'OpenWeather API', 'Chart.js'],
      link: '#',
      github: '#',
      image: undefined
    },
    {
      title: 'Social Media Analytics',
      description: 'Analytics platform for tracking social media metrics and generating insights.',
      tech: ['React', 'Python', 'Django', 'Chart.js'],
      link: '#',
      github: '#',
      image: undefined
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <>
      <Head>
        <title>Venkata Dinesh Yeluri - Full Stack Developer</title>
        <meta name="description" content="Portfolio of Venkata Dinesh Yeluri - Full Stack Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-24 sm:space-y-28 md:space-y-36 lg:space-y-44 xl:space-y-52">
        {/* Hero Section */}
        <section id="home" className="min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={mounted ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="text-center lg:text-left space-y-3 sm:space-y-4 md:space-y-5">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="mb-1 sm:mb-2 md:mb-3">
                    <span className="text-xs xs:text-sm sm:text-base text-gray-400 font-medium">Hello, I'm</span>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white leading-[1.1] sm:leading-tight">
                    Venkata Dinesh Yeluri
                  </h1>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                >
                  <div className="flex justify-center lg:justify-start">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border border-white/10">
                      <ImagePlaceholder
                        alt="Profile Picture"
                        width="100%"
                        height="100%"
                        rounded="full"
                      />
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-400 font-light">
                    Full Stack Developer
                  </h2>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0">
                    I build modern, scalable web applications with a focus on user experience and clean code. 
                    Transforming ideas into digital reality.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="flex gap-2.5 xs:gap-3 sm:gap-4 justify-center lg:justify-start flex-wrap pt-3 sm:pt-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <a
                      href="#contact"
                      className="btn hover:bg-white/10 transition-all duration-300"
                    >
                      Get In Touch
                    </a>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <a
                      href="#projects"
                      className="btn-outline hover:border-white/20 hover:bg-white/5 transition-all duration-300"
                    >
                      View Projects
                    </a>
                  </motion.div>
                  </div>
                </motion.div>
                </div>
              </motion.div>

              {/* Profile Image - Removed as requested */}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Removed section number as requested */}
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                    About Me
                  </h2>
                </motion.div>
                <div className="card space-y-4 md:space-y-5">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                      I'm a passionate full-stack developer with expertise in building modern web applications.
                      I love solving complex problems and turning ideas into reality through code.
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                      My journey in software development has been driven by curiosity and a desire to create
                      meaningful digital experiences. I enjoy working with cutting-edge technologies and
                      continuously learning new skills to stay ahead in this ever-evolving field.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="max-w-6xl mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          {/* Removed section number as requested */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16">Skills & Technologies</h2>

          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <motion.div key={skill.name} whileHover={{ scale: 1.1 }}>
                <div className="skill-tile flex items-center gap-2">
                  <span className="text-lg">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          {/* Removed section number as requested */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16">Featured Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {projects.map((project, index) => (
              <motion.div key={project.title} whileHover={{ y: -5 }}>
                <div className="card p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs px-2 py-1 bg-white/10 rounded">{t}</span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a href={project.link} className="text-gray-300 hover:text-white">Live Demo →</a>
                    <a href={project.github} className="text-gray-300 hover:text-white">GitHub →</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-xl mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-gray-300 mb-6">
            Feel free to reach out for projects, collaborations, or opportunities.
          </p>

          <div className="flex gap-4 justify-center">
            <a href="mailto:dineshyeluri707@gmail.com" className="btn">Send Email</a>
            <a href="/Dineshresume.pdf" className="btn-outline">Download Resume</a>
          </div>
        </section>
        </div>
      </motion.div>
    </>
  )
}
