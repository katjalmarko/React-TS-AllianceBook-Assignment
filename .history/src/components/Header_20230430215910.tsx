import { Starwars } from '../ImageImports';

const Header = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-">
        <img src={Starwars} alt="logo" className="h-36" />
        <p className="text-white text-4xl font-bold mt-4 animate-pulse font-wallpoet">
          CHARACTERS
        </p>
      </div>
    </div>
  );
};

export default Header;
