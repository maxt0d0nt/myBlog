import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './pages/home/Home';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { Settings } from './pages/Settings/Settings';
import { Single } from './pages/Single/Single';
import { Write } from './pages/Write/Write';

function App() {
  return (
   <>
   < Navbar /> 
   < Register/>
   </>
  );
}

export default App;
