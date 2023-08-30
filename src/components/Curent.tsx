import cloudrain from "../assets/cloudrain.png";

import WaterIcon from "@mui/icons-material/Water";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AirIcon from "@mui/icons-material/Air";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

const Curent = (data: any) => {
  return (
    <div className="bg-darkblue2/40 backdrop-blur-md rounded-xl p-4 flex flex-col gap-4 text-white">
      <div>
        <h2>Current Weather</h2>
        <span>{data?.main?.pressure}</span>
      </div>
      <div className="flex justify-between">
        <img src={cloudrain} className="w-16" />
        <div className="flex flex-col">
          <span className="text-3xl">24 C</span>
          <span>Heavy Rain</span>
        </div>
      </div>
      <div>
        <ul className="flex justify-between w-full">
          <li>
            <WaterIcon className="w-4" />
          </li>
          <li>
            <WaterDropIcon className="w-4" />
          </li>
          <li>
            <AirIcon className="w-4" />
          </li>
          <li>
            <WbSunnyIcon className="w-4" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Curent;
