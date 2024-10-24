import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-center items-center text-sm text-gray-600">
        <span>© </span>
        <a 
          href="https://lyvena.xyz/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mx-1 text-primary hover:underline"
        >
          Lyvena.
        </a>
        <span>All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;