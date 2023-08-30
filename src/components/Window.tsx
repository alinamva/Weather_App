import { useState } from "react";
import Curent from "../components/Curent";
import Search from "./Search";
import useSWR from "swr";
import axios from "axios";

export interface IWindow {
  city: string;
  setCity: (city: string) => void;
  handleButtonClick: () => void;
}

const Window = () => {
  const [city, setCity] = useState("");

  const handleButtonClick = () => {
    setCity("hello");
  };
  const api_key = "d5dc87c5ff563395e08edb6318fb7dea";
  const fetcher = async (url: string) => {
    const response = await axios.get(url);
    return response.data;
  };

  const apiURl = (cityName: string) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=Metric&appid=${api_key}`;

  const { data, error, isLoading } = useSWR(
    city ? apiURl(city) : null,
    fetcher
  );
  console.log("City:", city);
  console.log("Data:", data);
  console.log("Error:", error);
  console.log("IsValidating:", isLoading);

  if (error) return <div>Error</div>;
  if (isLoading) return <div>Loading ... </div>;
  return (
    <div className="p-10 flex flex-col gap-5">
      <h1>hello {data?.name}</h1>
      <Search
        setCity={setCity}
        handleButtonClick={handleButtonClick}
        city={city}
      />
      <Curent data={data} city={city} />
    </div>
  );
};

export default Window;
