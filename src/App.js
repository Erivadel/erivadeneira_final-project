import Header from './components/Header';
import './styles/App.scss';
import {BrowserRouter as Route} from 'react-router-dom'
import ControlCarousel from './components/ControlCarousel';
import Sections from './components/Sections';
import Footer from './components/Footer';





function App() {
  return (
  <div className="App" data-testid="pruebaTest">

    <Route>
      <Header/>  
      <ControlCarousel/>
      <Sections/>
      <Footer/>
    </Route>      
  </div>

  );
}

export default App;
