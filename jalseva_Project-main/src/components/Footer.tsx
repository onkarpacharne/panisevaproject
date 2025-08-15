import { useState } from 'react';
import { Linkedin, Instagram, Download } from 'lucide-react';
import { Button } from './ui/button';
// Removed DownloadProposalModal import
import PrivacyPolicyModal from './PrivacyPolicyModal';
import TermsOfServiceModal from './TermsOfServiceModal';

const Footer = () => {
  // Removed isProposalModalOpen state
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-montserrat font-bold">
                <span className="text-paniseva-blue">Pani</span>Seva
                {/*<span className="text-paniseva-blue bg-white/80 px-3 py-1 rounded-lg">Pani</span>Seva */}
              </h2>
            </div>
            <p className="text-gray-400 font-inter mb-6 max-w-md">
              Providing clean, free water to people in need while offering brands a unique opportunity 
              to fulfill social responsibility goals through smart advertising.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/onkar-pacharane-b0195b37a/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-paniseva-blue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://www.instagram.com/its_onkar_822/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-paniseva-blue transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 font-inter">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#benefits" className="text-gray-400 hover:text-white transition-colors">Benefits</a></li>
              <li><a href="#impact" className="text-gray-400 hover:text-white transition-colors">Impact</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 font-inter">
              <li className="flex items-start">
                <span className="text-paniseva-blue mr-2">📍</span>
                <span className="text-gray-400">Pune, India</span>
              </li>
              <li className="flex items-start">
                <span className="text-paniseva-blue mr-2">📧</span>
                <a 
                  href="mailto:onkarpacharane950@gmail.com" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  onkarpacharane950@gmail.com

                </a>
              </li>
              <li className="flex items-start">
                <span className="text-paniseva-blue mr-2">📱</span>
                <a href="tel:+919975177822" className="text-gray-400 hover:text-white transition-colors">
                  +91 9975177822
                </a>
              </li>
            </ul>

            {/* Removed 'Download Proposal' button */}
          </div>
        </div>

        <div className="pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm font-inter mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} paniseva. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <button 
                onClick={() => setIsPrivacyModalOpen(true)}
                className="text-gray-500 text-sm font-inter hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => setIsTermsModalOpen(true)}
                className="text-gray-500 text-sm font-inter hover:text-white transition-colors"
              >
                Terms of Service
              </button>
              <span className="text-gray-500 text-sm font-inter">Powered by Kaliyug Technologies</span>
            </div>
          </div>
        </div>
      </div>
      
  {/* Removed DownloadProposalModal usage */}
      
      <PrivacyPolicyModal 
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
      
      <TermsOfServiceModal 
        isOpen={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
      />
    </footer>
  );
};

export default Footer;
