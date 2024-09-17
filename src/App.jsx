import Navbar from './components/navbar/Navbar.jsx';
import MovieTop from './components/MovieTop/MovieTop.jsx';
import { assets } from "./assets/assets.js";
import Card from './components/Sections/Props/Card/Card.jsx';
const App = () => {
  return (
    <>
      <Navbar />
      <MovieTop />
      {/* <Card /> */} {/* For testing purposes */}
    </>
  );
}

export default App;
