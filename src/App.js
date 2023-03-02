import logo from './logo.svg';
import './App.css';
import Allroutes from './pages/Allroutes';
import { Navbar } from './pages/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
     <Allroutes/>
    </div>
  );
}

export default App;
