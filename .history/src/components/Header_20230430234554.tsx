import { Starwars1 } from '../ImageImports';
import { Starwars2 } from '../ImageImports';
import { Starwars3 } from '../ImageImports';

const Header = () => {
  return (
    <div className="flex justify-center items-center space-x-4 mt-8 mb-12">
      <img src={Starwars2} alt="logo" className="h-28 w-" />
      <h1 className="text-white animate-pulse text-2xl">Character</h1>
      <img src={Starwars1} alt="logo" className="h-28" />
      <h1 className="text-white animate-pulse text-2xl">Database</h1>
      <img src={Starwars3} alt="logo" className="h-28" />
    </div>
  );
};

export default Header;
