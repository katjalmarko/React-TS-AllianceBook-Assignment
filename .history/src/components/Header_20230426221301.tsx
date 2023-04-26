import React from 'react';

const Header = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-10">
        <img
          src="../public/images/Starwars.png"
          alt="logo"
          className="h-24 w-auto"
        />
        <p className="text-white text-2xl font-black mt-4">CHARACTERS</p>
      </div>
    </div>
  );
};

export default Header;
