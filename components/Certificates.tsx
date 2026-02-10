'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Certificates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const certificates = [
    {
      title: 'Social Media Marketing',
      issuer: 'Certified Professional',
      year: '2024',
      badge: '🏆',
    },
    {
      title: 'Canva Freelancing',
      issuer: 'Creative Design Expert',
      year: '2024',
      badge: '🎨',
    },
    {
      title: 'Spoken English',
      issuer: 'Communication Excellence',
      year: '2023',
      badge: '🗣️',
    },
    {
      title: 'Amazon PPC Manager',
      issuer: 'E-commerce Specialist',
      year: '2024',
      badge: '📊',
    },
    {
      title: 'Video Editing + AI',
      issuer: 'Advanced Media Production',
      year: '2024',
      badge: '🎬',
    },
  ];

  return (
    <section id="certificates" ref={ref} className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            Certifications
          </h2>
          <p className="text-white/60 text-lg">Industry-recognized credentials and achievements</p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="group"
              >
                <div className="glass-effect p-6 rounded-2xl glow-border relative overflow-hidden hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300">
                  {/* Badge */}
                  <div className="absolute top-4 right-4 text-5xl opacity-10 group-hover:opacity-20 transition-opacity">
                    {cert.badge}
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-3xl flex-shrink-0">
                        {cert.badge}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:gradient-text transition-all">
                          {cert.title}
                        </h3>
                        <p className="text-white/60 text-sm mb-2">{cert.issuer}</p>
                        <div className="flex items-center space-x-2">
                          <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary/30">
                            {cert.year}
                          </span>
                          <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">
                            ✓ Verified
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 grid md:grid-cols-2 gap-6"
          >
            <div className="glass-effect p-8 rounded-3xl glow-border text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-4xl mb-4">
                🎓
              </div>
              <h3 className="text-2xl font-bold gradient-text mb-2">
                Bachelor of Science in IT
              </h3>
              <p className="text-white/60">Computer Science & Technology</p>
            </div>
            <div className="glass-effect p-8 rounded-3xl glow-border text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-4xl mb-4">
                📚
              </div>
              <h3 className="text-2xl font-bold gradient-text mb-2">
                Bachelor of Education
              </h3>
              <p className="text-white/60">Teaching & Pedagogy</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
