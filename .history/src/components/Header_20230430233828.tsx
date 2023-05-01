import { Starwars1 } from '../ImageImports';
import { Starwars2 } from '../ImageImports';
import { Starwars3 } from '../ImageImports';

const Header = () => {
  return (
    <div className="flex justify-center items-between mt-8 mb-12">
      <img src={Starwars2} alt="logo" className="h-28" />
      <h1 className="text-white">Character</h1>
      <img src={Starwars1} alt="logo" className="h-28" />
      <h1 className="text-white">Database</h1>
      <img src={Starwars3} alt="logo" className="h-28" />
    </div>
  );
};

export default Header;
