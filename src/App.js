import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './pages/home/Home';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { Settings } from './pages/Settings/Settings';
import { Single } from './pages/Single/Single';
import { Write } from './pages/Write/Write';
import {
  Route,
  Routes
} from "react-router-dom";
import { useContext } from 'react';
import { Context } from './context/Context';

function App() {
  const {user} = useContext(Context)
  return (
    
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={< Home />}exact />
        <Route path="/register" element={user ? <Register /> : <Home/> } />
        <Route path="/login" element={user ? <Login />: <Login/> } />
        <Route path="/settings" element= {user ? <Settings /> : <Login />}  />
        <Route path="/post/:postId" element={<Single/>} />
        <Route path="/write"  element={user ? <Write /> : <Login />} />
      </Routes>
      </>
    
  );
}

export default App;
