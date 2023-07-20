import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import AddUser from './components/AddUser';
import AllUsers from "./components/AllUsers"
import CrudApp from "./components/CrudApp"
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<CrudApp/>}/>
      <Route path="/all" element={<AllUsers/>}/>
      <Route path ="/add" element={ <AddUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
