
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavLinkItem: React.FC<{ to: string; children: React.ReactNode; onClick?: () => void }> = ({ to, children, onClick }) => {
  const activeClassName = 'text-leo-gold';
  const inactiveClassName = 'text-white hover:text-leo-gold transition-colors duration-300';

  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `text-lg font-medium px-3 py-2 rounded-md ${isActive ? activeClassName : inactiveClassName}`
      }
    >
      {children}
    </NavLink>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-leo-maroon shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-white text-2xl font-bold tracking-wider">
              Roaring <span className="text-leo-gold">Stars</span>
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLinkItem to="/">Home</NavLinkItem>
              <NavLinkItem to="/about">About Us</NavLinkItem>
              <NavLinkItem to="/blog">Blog</NavLinkItem>
              <NavLinkItem to="/contact">Contact</NavLinkItem>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-leo-maroon focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLinkItem to="/" onClick={closeMenu}>Home</NavLinkItem>
            <NavLinkItem to="/about" onClick={closeMenu}>About Us</NavLinkItem>
            <NavLinkItem to="/blog" onClick={closeMenu}>Blog</NavLinkItem>
            <NavLinkItem to="/contact" onClick={closeMenu}>Contact</NavLinkItem>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
