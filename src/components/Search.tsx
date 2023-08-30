import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { IWindow } from "./Window";

const Search = ({ city, handleButtonClick }: IWindow) => {
  return (
    <div>
      <div className="flex text-white">
        <form className="flex">
          <div className="bg-darkblue2/40 rounded-l-xl backdrop-blur-md py-2 px-1  ">
            <MagnifyingGlassIcon className="w-5" />
          </div>
          <input
            className="bg-darkblue2/40 rounded-r-xl backdrop-blur-md outline-none"
            placeholder="Search for location"
            defaultValue={city}
          />
          <button
            type="button"
            onClick={handleButtonClick}
            className="bg-blue-500 px-3 py-1 rounded text-white ml-2"
          ></button>
        </form>
      </div>
    </div>
  );
};

export default Search;
