import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Curent from "../components/Curent";
const Window = () => {
  return (
    <div className="p-10 flex flex-col gap-5">
      <div className="flex text-white">
        <div className="bg-darkblue2/40 rounded-l-xl backdrop-blur-md py-2 px-1  ">
          <MagnifyingGlassIcon className="w-5" />
        </div>
        <input
          className="bg-darkblue2/40 rounded-r-xl backdrop-blur-md outline-none"
          placeholder="Search for location"
        />
      </div>
      <div>
        <Curent />
      </div>
    </div>
  );
};

export default Window;
