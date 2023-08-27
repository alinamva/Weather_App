import SideBar from "../components/SideBar";
import Window from "../components/Window";

const Home = () => {
  return (
    <div className="w-full bg-darkblue/50 h-[80vh] backdrop-blur-sm rounded-xl flex">
      <SideBar />
      <Window />
    </div>
  );
};

export default Home;
