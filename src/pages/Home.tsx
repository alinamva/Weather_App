// component imports
import { useState } from "react";
import Maps from "../components/Maps";
import SideBar from "../components/SideBar";
import Window from "../components/Window";

const Home = () => {
  const [window, setWindow] = useState(true);
  const [maps, setMaps] = useState(false);

  const handleWindow = () => {
    setWindow(true);
    setMaps(false);
  };
  const handleMaps = () => {
    setMaps(true);
    setWindow(false);
  };

  return (
    <div className="w-full bg-darkblue/50  backdrop-blur-sm rounded-xl flex">
      <SideBar handleWindow={handleWindow} handleMaps={handleMaps} />
      {window && <Window />}
      {maps && <Maps />}
    </div>
  );
};
export default Home;
