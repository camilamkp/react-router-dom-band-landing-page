import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";

import Home from './Pages/Home';
import Vocals from './Pages/Vocals';
import Guitar from './Pages/Guitar';
import Bass from './Pages/Bass';
import Drums from './Pages/Drums';
import Error from './Pages/Error';

import './App.css';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      
      <header>
      <NavLink to="/"><h1>Black Sabbath</h1></NavLink>
      <nav>
      <NavLink to="/vocals">Vocals</NavLink>
      <NavLink to="/guitar">Guitar</NavLink>
      <NavLink to="/bass">Bass</NavLink>
      <NavLink to="/drums">Drums</NavLink>
      </nav>
      </header>
     
      <Routes>
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/vocals" element={ <Vocals /> }></Route>
        <Route path="/guitar" element={ <Guitar /> }></Route>
        <Route path="/bass" element={ <Bass /> }></Route>
        <Route path="/drums" element={ <Drums /> }></Route>
        <Route path="*" element={ <Error /> }></Route>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
