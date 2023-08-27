import { MapIcon } from "@heroicons/react/24/outline";
import cloudrain from "../assets/cloudrain.png";
const Curent = () => {
  return (
    <div className="bg-darkblue2/40 backdrop-blur-md rounded-xl p-4 text-white">
      <div>
        <h2>Current Weather</h2>
        <span>6 PM</span>
      </div>
      <div className="flex">
        <img src={cloudrain} className="w-16" />
        <div>
          <h2>24 C</h2>
          <span>Heavy Rain</span>
        </div>
      </div>
      <div>
        <ul className="flex gap-4 w-full">
          <li>
            <MapIcon className="w-4" />
          </li>
          <li>
            <MapIcon className="w-4" />
          </li>
          <li>
            <MapIcon className="w-4" />
          </li>
          <li>
            <MapIcon className="w-4" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Curent;
