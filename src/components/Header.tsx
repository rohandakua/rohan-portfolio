import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-12 pt-32">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-wider">
          ROHAN DAKUA
        </h1>
        <div className="mt-4 text-xl md:text-2xl text-gray-400 font-light">
          Android Developer
        </div>
        <div className="mt-3 space-y-1">
          <div className="text-sm md:text-base text-gray-400">
            <span className="font-semibold text-white bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Android Developer Intern
            </span>{' '}
            @{' '}
            <a
              href="https://aivirex.in"
              className="text-blue-400 underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              AiVirex Innovations
            </a>
            {'\u00A0'.repeat(8)}May 2025 – August 2025
          </div>
          <div className="text-sm md:text-base text-gray-400">
            <span className="font-semibold text-white bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Android Developer Intern
            </span>{' '}
            @{' '}
            <a
              href="https://confirmtalk.com"
              className="text-blue-400 underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              ConfirmTalk
            </a>
            {'\u00A0'.repeat(8)}June 2025 – August 2025
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
