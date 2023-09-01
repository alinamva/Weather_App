import { useState } from "react";
import Curent from "../components/Curent";
import useSWR from "swr";
import axios from "axios";

//icon imports
import cloudy_icon from "../assets/cloudy_icon.png";
import drizzle_icon from "../assets/drizzle_icon.png";
import sunny_icon from "../assets/sunny_icon.png";
import fewclouds_icon from "../assets/fewclouds_icon.png";
import rainy_icon from "../assets/rainy_icon.png";
import thunderstorm_icon from "../assets/thunderstorm_icon.png";
import snow_icon from "../assets/snow_icon.png";
import mist_icon from "../assets/mist_icon.png";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Forecast from "./Forecast";

export interface IWindow {
  city: string;
  setCity: (city: string) => void;
}

const Window = () => {
  const [city, setCity] = useState("Baku");
  const [time, setTime] = useState("");
  const [icon, setIcon] = useState(drizzle_icon);
  const api_key = "d5dc87c5ff563395e08edb6318fb7dea";

  const fetcher = async (url: string) => {
    const response = await axios.get(url);
    const now = new Date();
    const currentTime = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    setTime(currentTime);

    const weatherIcon = response.data.weather[0].icon;
    let newIcon = drizzle_icon;

    if (weatherIcon === "01d" || weatherIcon === "01n") {
      newIcon = sunny_icon;
    } else if (weatherIcon === "02d" || weatherIcon === "02n") {
      newIcon = fewclouds_icon;
    } else if (
      weatherIcon === "03d" ||
      weatherIcon === "03n" ||
      weatherIcon === "04d" ||
      weatherIcon === "04n"
    ) {
      newIcon = cloudy_icon;
    } else if (weatherIcon === "09d" || weatherIcon === "09n") {
      newIcon = rainy_icon;
    } else if (weatherIcon === "10d" || weatherIcon === "10n") {
      newIcon = drizzle_icon;
    } else if (weatherIcon === "11d" || weatherIcon === "11n") {
      newIcon = thunderstorm_icon;
    } else if (weatherIcon === "13d" || weatherIcon === "13n") {
      newIcon = snow_icon;
    } else if (weatherIcon === "50d" || weatherIcon === "50n") {
      newIcon = mist_icon;
    }

    setIcon(newIcon);
    return response.data;
  };

  const apiUrl = (cityName: string) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=Metric&appid=${api_key}`;

  const { data } = useSWR(city ? apiUrl(city) : null, fetcher);

  return (
    <div className="p-10 flex flex-col gap-5">
      <div className="flex  text-white">
        <input
          className="bg-darkblue2/40 px-3 rounded-l-xl backdrop-blur-md outline-none"
          placeholder="Search for location"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <div className="bg-darkblue2/40 cursor-pointer hover:bg-hover duration-500 px-3 rounded-r-xl border-l border-lightgrey backdrop-blur-md py-2  ">
          <MagnifyingGlassIcon className="w-5" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {data && <Curent data={data} time={time} city={city} icon={icon} />}
        <Forecast city={city} />
      </div>
    </div>
  );
};

export default Window;
