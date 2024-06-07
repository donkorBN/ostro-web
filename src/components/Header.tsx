import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'; // Importing the missing Bars3Icon and XMarkIcon for toggle functionality

interface NavigationItem {
  name: string;
  href: string;
}

const navigation: NavigationItem[] = [
  { name: 'About', href: '#' },
  { name: 'Team', href: '#' },
  { name: 'Events', href: '#' },
  { name: 'Mission', href: '#' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4" aria-label="Global">
        <div className="flex items-center">
          <a href="#" className="flex-shrink-0">
            <img
              className="h-10 w-auto"
              src="src/assets/logo.png"
              alt="ostrohub-logo"
            />
          </a>
        </div>
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex space-x-8`}>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex items-center space-x-4`}>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
            Log in
          </a>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Sign up
          </a>
        </div>
        <div className="-mr-2 flex lg:hidden">
          <button
            type="button"
            className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
