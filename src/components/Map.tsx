import { Coordinates } from "./MainWindow";

interface CoordinatesProps {
  coordinates: Coordinates;
}

const Map = ({ coordinates }: CoordinatesProps) => {
  const apiKey = "d5dc87c5ff563395e08edb6318fb7dea";
  const layer = "temp_new";
  const zoom = 1;
  const latitude = coordinates.lat;
  const longitude = coordinates.lon;

  const x = Math.floor(((longitude + 180) / 360) * Math.pow(2, zoom));
  const y = Math.floor(
    ((1 -
      Math.log(
        Math.tan((latitude * Math.PI) / 180) +
          1 / Math.cos((latitude * Math.PI) / 180)
      ) /
        Math.PI) /
      2) *
      Math.pow(2, zoom)
  );

  const mapTileUrl = `https://tile.openweathermap.org/map/${layer}/${zoom}/${x}/${y}.png?appid=${apiKey}`;
  return (
    <div className="bg-darkblue2/40 rounded-xl w-full h-full">
      <div className=" bg-gray-500 rounded-xl w-full h-full">
        <img src={mapTileUrl} alt="Map" className=" w-full rounded-xl" />
      </div>
    </div>
  );
};

export default Map;
