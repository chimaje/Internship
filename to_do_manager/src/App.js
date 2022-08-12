import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import './App.css';
import Navbar from './Nav';
import Home from './Homepage';
import Create from "./Newlist";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="Content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/add" element={<Create/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
