import axios from "axios";
import useSWR from "swr";

import cloudy_icon from "../assets/cloudy_icon.png";
import drizzle_icon from "../assets/drizzle_icon.png";
import sunny_icon from "../assets/sunny_icon.png";
import fewclouds_icon from "../assets/fewclouds_icon.png";
import rainy_icon from "../assets/rainy_icon.png";
import thunderstorm_icon from "../assets/thunderstorm_icon.png";
import snow_icon from "../assets/snow_icon.png";
import mist_icon from "../assets/mist_icon.png";

interface ForecastProps {
  city: string;
}
interface WeatherData {
  list: {
    dt_txt: string;
    main: {
      temp_min: number;
      temp_max: number;
    };
    weather: {
      icon: string;
    }[];
  }[];
}

const Forecast: React.FC<ForecastProps> = ({ city }) => {
  const api_key = "d5dc87c5ff563395e08edb6318fb7dea";
  const dailyApi = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${api_key}`;

  const fetcher = async (url: string) => {
    const response = await axios.get(url);
    return response.data;
  };
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return new Date(dateString).toLocaleString(undefined, options);
  };
  const mapWeatherIconToImage = (weatherIcon: string) => {
    switch (weatherIcon) {
      case "01d":
      case "01n":
        return sunny_icon;
      case "02d":
      case "02n":
        return fewclouds_icon;
      case "03d":
      case "03n":
      case "04d":
      case "04n":
        return cloudy_icon;
      case "09d":
      case "09n":
        return rainy_icon;
      case "10d":
      case "10n":
        return drizzle_icon;
      case "11d":
      case "11n":
        return thunderstorm_icon;
      case "13d":
      case "13n":
        return snow_icon;
      case "50d":
      case "50n":
        return mist_icon;
      default:
        return mist_icon;
    }
  };

  const { data, error } = useSWR<WeatherData>(dailyApi, fetcher);
  if (error) <div>error</div>;

  const dateData =
    data && data.list
      ? data.list
          .filter((item) => item.dt_txt.includes("12:00:00"))
          .map((item) => {
            const formattedDate = formatDate(item.dt_txt.split(" ")[0]);
            const weatherIcon = item.weather[0].icon;
            const icon = mapWeatherIconToImage(weatherIcon);
            return {
              date: formattedDate,
              minTemp: item.main.temp_min,
              maxTemp: item.main.temp_max,
              icon: icon,
            };
          })
      : [];
  return (
    <div className="bg-darkblue2/40 flex flex-col gap-5 backdrop-blur-md rounded-xl p-4 text-white">
      <div>
        <p>Forecast for 5 days in {city}</p>
      </div>
      <div>
        <ul className="flex flex-col gap-5">
          {dateData.map((item, index) => (
            <li key={index} className="flex text-left justify-between">
              <img src={item.icon} className="w-4" />
              <span>
                {item.minTemp} / {item.maxTemp}
              </span>
              <span>{item.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Forecast;
