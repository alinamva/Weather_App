// icon imports
import {
  MapIcon,
  MapPinIcon,
  Squares2X2Icon,
  SunIcon,
} from "@heroicons/react/24/outline";

const SideBar = () => {
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
          <Squares2X2Icon className="w-6" />
        </li>
        <li className="hoverli">
          <MapIcon className="w-6" />
        </li>
        <li className="hoverli">
          <MapPinIcon className="w-6" />
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
