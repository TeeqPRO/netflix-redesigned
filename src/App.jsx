import Navbar from './components/navbar/Navbar';
import { assets } from "./public/assets.js";

const App = () => {
  return (
    <>
      <Navbar />
      <div>
        <img src={assets.Logo} alt="Logo" className="logo"/>
      </div>
    </>
  );
}

export default App;
