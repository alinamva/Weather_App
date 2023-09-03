import MainWindow from "./MainWindow";
import Maps from "./Maps";

interface WindowProps {
  window: boolean;
  maps: boolean;
}
const Window: React.FC<WindowProps> = ({ window }) => {
  return <>{window ? <MainWindow /> : <Maps />}</>;
};

export default Window;
