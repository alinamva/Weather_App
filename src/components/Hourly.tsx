import axios from "axios";
import useSWR from "swr";
import { ForecastProps, mapWeatherIconToImage, WeatherData } from "./Forecast";

const Hourly: React.FC<ForecastProps> = ({ city }) => {
  const api_key = "d5dc87c5ff563395e08edb6318fb7dea";
  const hourlyApi = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${api_key}`;

  const fetcher = async (url: string) => {
    const response = await axios.get(url);
    return response.data;
  };

  const { data, error } = useSWR<WeatherData>(hourlyApi, fetcher);

  if (error) return <div>error</div>;

  const currentTime = new Date();

  const timeData =
    data && data.list
      ? data.list
          .filter((item) => {
            const date = new Date(item.dt_txt);
            return (
              date.getDate() === currentTime.getDate() &&
              date.getHours() % 3 === 0
            ); // Filter for the current day only
          })
          .map((item) => {
            const weatherIcon = item.weather[0].icon;
            const icon = mapWeatherIconToImage(weatherIcon);
            const date = new Date(item.dt_txt);
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const formattedTime = `${hours}:${
              minutes < 10 ? "0" : ""
            }${minutes}`;
            return {
              time: formattedTime,
              temp: item.main.temp,
              icon: icon,
            };
          })
      : [];

  return (
    <div className="bg-darkblue2/40 flex flex-col gap-5 backdrop-blur-md rounded-xl p-6 text-white">
      <h2 className="text-white">Today at</h2>
      <div className="flex flex-col rounded-xl text-white">
        <div className="flex items-center gap-5 justify-left">
          {timeData.map((item, index) => (
            <div
              key={index}
              className="flex hover:bg-darkblue2/75 duration-300 cursor-pointer px-6 py-3 rounded-xl flex-col items-center gap-2"
            >
              <span>{item.time}</span>
              <img
                src={item.icon}
                className="w-8"
                alt={`Weather at ${item.time}`}
              />
              <span>{item.temp.toFixed(0)}°C</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hourly;
