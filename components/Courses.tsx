"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Courses() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const courses = [
    {
      title: "Social Media Marketing",
      description:
        "Master Facebook, Instagram, LinkedIn, and TikTok marketing strategies",
      icon: "📱",
      color: "from-blue-500 to-cyan-500",
      skills: ["Content Strategy", "Analytics", "Ad Campaigns", "Engagement"],
    },
    {
      title: "Canva Freelancing",
      description:
        "Create stunning designs and build a profitable freelancing career",
      icon: "🎨",
      color: "from-purple-500 to-pink-500",
      skills: ["Brand Design", "Templates", "Client Work", "Portfolio"],
    },
    {
      title: "Video Editing + AI",
      description: "Professional video editing with cutting-edge AI tools",
      icon: "🎬",
      color: "from-orange-500 to-red-500",
      skills: [
        "Adobe Premiere",
        "AI Enhancement",
        "Color Grading",
        "Motion Graphics",
      ],
    },
    {
      title: "Amazon PPC Manager",
      description: "Drive sales with expert Amazon advertising strategies",
      icon: "🛒",
      color: "from-green-500 to-emerald-500",
      skills: [
        "Campaign Setup",
        "Keyword Research",
        "Optimization",
        "Analytics",
      ],
    },
    {
      title: "Spoken English",
      description: "Achieve fluency and confidence in English communication",
      icon: "🗣️",
      color: "from-indigo-500 to-purple-500",
      skills: ["Pronunciation", "Grammar", "Conversation", "Presentation"],
    },
    {
      title: "Web Development",
      description: "Build modern websites with Next.js, TypeScript & Tailwind",
      icon: "💻",
      color: "from-cyan-500 to-blue-500",
      skills: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    },
  ];

  return (
    <section id="courses" ref={ref} className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            Premium Courses
          </h2>
          <p className="text-white/60 text-lg">
            Master in-demand skills with expert guidance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="glass-effect p-8 rounded-3xl glow-border h-full hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] transition-all duration-300">
                {/* Icon */}
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {course.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:gradient-text transition-all">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 mb-6 leading-relaxed">
                  {course.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {course.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white/5 rounded-full text-sm text-white/80 border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* CTA Button (WhatsApp Link) */}
                <a
                  href={`https://wa.me/923016172702?text=Hi%20I%20am%20interested%20in%20the%20${encodeURIComponent(
                    course.title,
                  )}%20course`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 rounded-xl bg-gradient-to-r ${course.color} text-white text-center font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105`}
                >
                  Enroll Now
                </a>

                {/* Hover Glow Effect */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${course.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300 -z-10`}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
