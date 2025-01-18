import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="navbar bg-base-100 shadow-lg">
      <div className="flex-1 justify-center items-center">
        <img src="/logo.jpeg" alt="Logo" className="w-12 h-12 mr-4" />
        <a className="btn btn-ghost normal-case text-3xl font-bold" href="/">
          My-Hive-Blog
        </a>
      </div>
    </header>
  );
};

export default Header;