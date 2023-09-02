// component imports
import SideBar from "../components/SideBar";
import Window from "../components/Window";

const Home = () => {
  return (
    <div className="w-full bg-darkblue/50  backdrop-blur-sm rounded-xl flex">
      <SideBar />
      <Window />
    </div>
  );
};

export default Home;
