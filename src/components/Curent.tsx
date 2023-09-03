//icon imports
import WaterIcon from "@mui/icons-material/Water";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AirIcon from "@mui/icons-material/Air";

interface IData {
  name: string;
  main: {
    temp: number;
    pressure: number;
    humidity: number;
  };
  weather: {
    description: string;
  }[];
  wind: {
    speed: number;
  };
}
interface DataProps {
  data: IData;
  time: string;
  city: string;
  icon: string;
}

const Curent: React.FC<DataProps> = ({ data, time, icon }) => {
  const {
    name,
    main: { temp, pressure, humidity },
    weather,
    wind,
  } = data;
  console.log(data);
  return (
    <div className="bg-darkblue2/40  backdrop-blur-md rounded-xl p-8 flex flex-col gap-7 text-white">
      <div>
        <h2>Current Weather</h2>
        <span>{time}</span>
      </div>
      <div className="flex justify-between items-center">
        <img src={icon} className="w-24" />
        <div className="flex flex-col text-right">
          <h1 className="text-4xl">{name}</h1>
          <h2 className="text-3xl">{temp.toFixed(0)}°C</h2>
          <p>{weather[0].description}</p>
        </div>
      </div>
      <div>
        <ul className="flex justify-between w-full">
          <li className="flex gap-2 flex-col justify-center items-center">
            <WaterIcon className="w-4" />
            <p>{pressure} %</p>
          </li>
          <li className="flex flex-col gap-2 justify-center items-center">
            <WaterDropIcon className="w-4" />
            <p>{humidity} %</p>
          </li>
          <li className="flex flex-col gap-2 justify-center items-center text-center">
            <AirIcon className="w-4" />
            <p>{wind.speed} m/s </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Curent;
