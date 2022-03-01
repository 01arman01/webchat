import logo from './logo.svg';
import './App.css';
import Header from  './Components/Header/Header'
import Navbar from "./Components/Navber/Navbar";
import Profile from "./Components/Profile/Profile";
let App = () => {

  return (
    <div className="app-wrapper">
         <Header/>
         <Navbar/>
         <Profile/>
    </div>
  );
}


export default App;
