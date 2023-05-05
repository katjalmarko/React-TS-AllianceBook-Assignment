import { Starwars1 } from '../ImageImports';
import { Starwars2 } from '../ImageImports';
import { Starwars3 } from '../ImageImports';

const Header = () => {
  return (
    <div className="flex flex-row justify-center items-center space-x-1 sm:space-x-2 md:space-x-4 mt-2 sm:mt-4 md:mt-8 mb-4 sm:mb-8 md:mb-4">
      <img
        src={Starwars2}
        alt="logo"
        className="h-10 xs:h-8 sm:h-12 md:h-16 lg:h-20 xl:h-28 w-12 sm:w-16 md:w-20 lg:w-24 xl:w-28"
      />
      <h1
        className="text-white animate-pulse text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl"
        style={{ textShadow: '0 0 20px white' }}
      >
        Character
      </h1>
      <img
        src={Starwars1}
        alt="logo"
        className="h-8 xs:h-10 sm:h-16 md:h-16 lg:h-20 xl:h-24"
      />
      <h1
        className="text-white animate-pulse text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl"
        style={{ textShadow: '0 0 20px white' }}
      >
        Database
      </h1>
      <img
        src={Starwars3}
        alt="logo"
        className="h-10 xs:h-8 sm:h-12 md:h-16 lg:h-20 xl:h-28 w-12 sm:w-16 md:w-20 lg:w-24 xl:w-28"
      />
    </div>
  );
};

export default Header;
