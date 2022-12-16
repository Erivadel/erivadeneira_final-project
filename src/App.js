import "./styles/App.scss";

import ControlCarousel from "./components/ControlCarousel";
import Sections from "./components/Sections";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App" data-testid="pruebaTest">
      <ControlCarousel />
      <Sections />
      <Footer />
    </div>
  );
}

export default App;
