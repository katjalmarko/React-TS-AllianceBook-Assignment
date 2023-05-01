import { Starwars1 } from '../ImageImports';
import { Starwars2 } from '../ImageImports';
import { Starwars3 } from '../ImageImports';

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mt-8 mb-12">
      <img src={Starwars2} alt="logo" className="h-20 md:h-28 w-32 md:w-48" />
      <h1 className="text-white animate-pulse text-xl md:text-2xl">
        Character
      </h1>
      <img src={Starwars1} alt="logo" className="h-20 md:h-28" />
      <h1 className="text-white animate-pulse text-xl md:text-2xl">Database</h1>
      <img src={Starwars3} alt="logo" className="h-20 md:h-28 w-32 md:w-48" />
    </div>
  );
};

export default Header;
