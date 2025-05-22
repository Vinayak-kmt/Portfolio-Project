import React from 'react';
import { Github, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';
import { Link } from './ui/Link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-900 text-white relative">
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left column */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-bold mb-2">
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                V
              </span>
              inayak Naik
            </h3>
            <p className="text-gray-300 max-w-xs">
              Building beautiful, functional websites and applications with
              attention to detail and user experience.
            </p>
            <div className="flex space-x-4 pt-4">
              <Link
                href="https://github.com"
                aria-label="GitHub"
                className="backdrop-blur-sm bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors border border-white/20"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/vinayak-naik-827375168?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                aria-label="LinkedIn"
                className="backdrop-blur-sm bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors border border-white/20"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://twitter.com"
                aria-label="Twitter"
                className="backdrop-blur-sm bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors border border-white/20"
              >
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          {/* Middle column */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {['Home', 'Projects', 'Skills', 'About', 'Contact'].map(
                (item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* Right column */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold mb-2">Contact</h3>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center group">
                <Mail size={18} className="text-blue-400 mr-2" />
                <Link
                  href="mailto:hello@vinayaknaik.com"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Vinayaknaikurk@gmail.com
                </Link>
              </div>
              <div className="flex items-start">
                <MapPin size={18} className="text-blue-400 mr-2 mt-1" />
                <span className="text-gray-300">
                  Bengaluru, Karnataka, India
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Vinayak Naik. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Developed by Vinayak Naik
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
