import React from 'react';
import { ArrowRight, Code, Layout, Rocket } from 'lucide-react';
import { Link } from './ui/Link';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen relative bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-900 text-white pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center pt-12 sm:pt-20 pb-16 sm:pb-32">
          {/* Left Column - Text Content */}
          <div className="text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Hi, I'm
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                {' '}
                Vinay Naik
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mb-8 sm:mb-12">
              A passionate Network Engineer crafting robust and scalable
              solutions for tomorrow's connectivity challenges.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-16">
              <Link
                href="https://drive.google.com/file/d/18Oy2phPWSdN9li_yDT-htSQWpLzQzLU7/view"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 sm:px-8 py-3 rounded-full font-medium flex items-center justify-center group transition-all"
              >
                View My Resume
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Link>
              <Link
                href="#contact"
                className="backdrop-blur-sm bg-white/10 hover:bg-white/20 text-white px-6 sm:px-8 py-3 rounded-full font-medium transition-all border border-white/20"
              >
                Get in Touch
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="backdrop-blur-md bg-white/10 p-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all">
                <Code className="text-blue-400 mb-2" size={24} />
                <h3 className="text-lg font-semibold mb-1">Architecture</h3>
                <p className="text-sm text-gray-300">Network Design</p>
              </div>
              <div className="backdrop-blur-md bg-white/10 p-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all">
                <Layout className="text-blue-400 mb-2" size={24} />
                <h3 className="text-lg font-semibold mb-1">Solutions</h3>
                <p className="text-sm text-gray-300">Enterprise Grade</p>
              </div>
              <div className="backdrop-blur-md bg-white/10 p-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all">
                <Rocket className="text-blue-400 mb-2" size={24} />
                <h3 className="text-lg font-semibold mb-1">Performance</h3>
                <p className="text-sm text-gray-300">Optimized Systems</p>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="order-first md:order-last flex justify-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 blur-2xl opacity-50 animate-pulse" />
              <img
                src="https://i.postimg.cc/nrJrDC65/Vinay.jpg"
                alt="Vinayak Naik"
                className="relative rounded-full w-full h-full object-cover border-4 border-white/20 backdrop-blur-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;