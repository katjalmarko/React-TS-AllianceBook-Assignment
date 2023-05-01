import { Starwars1 } from '../ImageImports';
import { Starwars2 } from '../ImageImports';
import { Starwars3 } from '../ImageImports';

const Header = () => {
  return (
    <div className="flex flex-row justify-center items-center space-x-2 sm:space-x-4 mt-4 sm:mt-8 mb-8 sm:mb-12">
      <img src={Starwars2} alt="logo" className="h-16 sm:h-20 w-16 sm:w-48" />
      <h1 className="text-white animate-pulse text-sm sm:text-2xl">
        Character
      </h1>
      <img src={Starwars1} alt="logo" className="h-16 sm:h-28" />
      <h1 className="text-white animate-pulse text-sm sm:text-2xl">Database</h1>
      <img src={Starwars3} alt="logo" className="h-16 sm:h-28 w-24 sm:w-48" />
    </div>
  );
};

export default Header;
