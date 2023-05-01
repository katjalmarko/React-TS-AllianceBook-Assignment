import { Starwars1 } from '../ImageImports';
import { Starwars2 } from '../ImageImports';
import { Starwars3 } from '../ImageImports';

const Header = () => {
  return (
    <div className="flex flex-row justify-center items-center space-x-1 sm:space-x-2 md:space-x-4 mt-2 sm:mt-4 md:mt-8 mb-4 sm:mb-8 md:mb-12">
      <img
        src={Starwars2}
        alt="logo"
        className="h-10 sm:h-16 md:h-16 lg:h-32 xl:h-36 w-20 sm:w-24 md:w-48 lg:w-56 xl:w-64"
      />
      <h1 className="text-white animate-pulse text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
        Character
      </h1>
      <img
        src={Starwars1}
        alt="logo"
        className="h-8 sm:h-16 md:h-16 lg:h-24 xl:h-28"
      />
      <h1 className="text-white animate-pulse text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl">
        Database
      </h1>
      <img
        src={Starwars3}
        alt="logo"
        className="h-10 sm:h-16 md:h-16 lg:h-32 xl:h-36 w-20 sm:w-24 md:w-48 lg:w-56 xl:w-64"
      />
    </div>
  );
};

export default Header;
