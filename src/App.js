import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import Request from './Pages/Request/Request';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path='Request' element={<Request />}/>
    </Routes>
  );
}

export default App;
