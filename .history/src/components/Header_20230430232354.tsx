import { Starwars } from '../ImageImports';

const Header = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-8">
        <img src={Starwars} alt="logo" className="h-28" />
        <p className="text- text-4xl font-bold animate-pulse font-wallpoet">
          CHARACTERS
        </p>
      </div>
    </div>
  );
};

export default Header;
