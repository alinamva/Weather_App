// icon imports
import {
  MapIcon,
  MapPinIcon,
  Squares2X2Icon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { IHome } from "../pages/Home";

const SideBar: React.FC<IHome> = ({ handleWindow, handleMaps }) => {
  return (
    <div className="bg-darkblue2/40 backdrop-blur-md rounded-l-xl text-white p-4 flex justify-center  ">
      <ul className="flex flex-col gap-8 items-center ">
        <li></li>
        <li>
          <SunIcon className="w-10" />
        </li>
        <li></li>
        <li></li>
        <li className="hoverli">
          <Squares2X2Icon className="w-6" onClick={handleWindow} />
        </li>
        <li className="hoverli">
          <MapIcon className="w-6" onClick={handleMaps} />
        </li>
        <li className="hoverli">
          <MapPinIcon className="w-6" />
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
