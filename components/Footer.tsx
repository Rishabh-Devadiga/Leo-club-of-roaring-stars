
import React from 'react';
import { FacebookIcon, InstagramIcon, LinkedInIcon } from './icons/SocialIcons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
          <div>
            <h3 className="text-xl font-bold">Leo Club of Roaring Stars</h3>
            <p className="text-gray-400">Serving the community with pride.</p>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-leo-gold transition-colors duration-300">
              <FacebookIcon />
            </a>
            <a href="#" className="text-gray-400 hover:text-leo-gold transition-colors duration-300">
              <InstagramIcon />
            </a>
            <a href="#" className="text-gray-400 hover:text-leo-gold transition-colors duration-300">
              <LinkedInIcon />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Leo Club of Roaring Stars. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
