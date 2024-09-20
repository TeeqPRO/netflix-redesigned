import Navbar from './components/navbar/Navbar.jsx';
import MovieTop from './components/MovieTop/MovieTop.jsx';
import FirstSectionCards from './components/Sections/FirstSectionCards/FirstSectionCards.jsx';

import { assets } from "./assets/assets.js";

const App = () => {
  return (
    <>
      <Navbar />
      <MovieTop />
      <FirstSectionCards />
    </>
  );
}

export default App;
