import { Starwars1 } from '../ImageImports';
import { Starwars2 } from '../ImageImports';
import { Starwars3 } from '../ImageImports';

const Header = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-8">
        <div className="flex justify-between">
          <img src={Starwars2} alt="logo" className="h-28" />
          <h1></h1>
          <img src={Starwars1} alt="logo" className="h-28" />
          <h1>Database</h1>
          <img src={Starwars3} alt="logo" className="h-28" />
        </div>
        <p className="text- text-4xl font-bold animate-pulse font-wallpoet">
          CHARACTERS
        </p>
      </div>
    </div>
  );
};

export default Header;
