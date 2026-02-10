'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    { name: 'Next.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'Supabase', level: 85 },
    { name: 'React', level: 90 },
    { name: 'Digital Marketing', level: 88 },
  ];

  return (
    <section id="about" ref={ref} className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-white/60 text-lg">Passionate educator and developer</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-effect p-8 rounded-3xl glow-border">
              <h3 className="text-3xl font-bold mb-6 gradient-text">
                Building Digital Futures
              </h3>
              <p className="text-white/70 mb-4 leading-relaxed">
                With a <span className="text-primary font-semibold">BS in IT</span> and <span className="text-secondary font-semibold">B.Ed.</span>, 
                I combine technical expertise with teaching excellence to empower aspiring professionals.
              </p>
              <p className="text-white/70 mb-4 leading-relaxed">
                Specializing in modern web development using Next.js, TypeScript, Tailwind CSS, and Supabase, 
                I create stunning, high-performance applications that drive results.
              </p>
              <p className="text-white/70 mb-6 leading-relaxed">
                Beyond development, I'm certified in Social Media Marketing, Canva Freelancing, Amazon PPC Management, 
                Video Editing with AI, and Spoken English - knowledge I'm passionate about sharing through my courses.
              </p>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">5+ Certifications</div>
                  <div className="text-white/60">Industry-recognized credentials</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="glass-effect p-8 rounded-3xl glow-border">
              <h3 className="text-2xl font-bold mb-8 gradient-text">
                Technical Skills
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="glass-effect p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold gradient-text">BS IT</div>
                  <div className="text-white/60 text-sm">Computer Science</div>
                </div>
                <div className="glass-effect p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold gradient-text">B.Ed.</div>
                  <div className="text-white/60 text-sm">Education</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
    </section>
  );
}
