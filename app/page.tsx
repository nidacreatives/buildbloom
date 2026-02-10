'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Courses from '@/components/Courses';
import Services from '@/components/Services';
import Certificates from '@/components/Certificates';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';

// Dynamically import Three.js component to avoid SSR issues
const ThreeScene = dynamic(() => import('@/components/ThreeScene'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      {/* Background Effects */}
      <ParticleBackground />
      <ThreeScene />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <Hero />
      <About />
      <Courses />
      <Services />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  );
}
