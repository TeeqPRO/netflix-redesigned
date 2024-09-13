import Navbar from './components/navbar/Navbar.jsx';
import recomendedVideo from './components/recomendedVideo/recomendedVideo.jsx';
import { assets } from "./assets/assets.js";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="Page">
        <recomendedVideo />
      </div>
    </>
  );
}

export default App;
