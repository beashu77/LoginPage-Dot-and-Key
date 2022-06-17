
import './App.css';
import Payment from './pages/Payment';
import Login from './LoginPageComponents/Login';
import ForgotPassword from './LoginPageComponents/ForgotPassword';
import Navbar from './NavbarComponents/Navbar';
import { Routes, Route } from "react-router-dom";
import SignUp from './LoginPageComponents/SignUp';
import Aboutus from './pages/Aboutus';
import Product from './pages/Product';
import RequiredAuth from './hoc/RequiredAuth';
import Home from './pages/Home';
import TrackShipment from './LoginPageComponents/TrackShipment';
import Form from './pages/Form';

function App() {
  return (
    <div className="App">

<Navbar/>
    <Routes>
      <Route path={"/login"} element={<Login/>}/>
      <Route path={"/forgetpassword"} element={<ForgotPassword/>} />
      <Route path={"/signup"} element={<SignUp/>} />
      <Route  path ={"/trackShipment"} element ={<RequiredAuth><TrackShipment/></RequiredAuth> }/>
      <Route path={"/"} element={<Home/>}/>
      <Route path={"/aboutus"} element={<Aboutus/>}/>
      <Route path ={"/product"} element ={<RequiredAuth><Product/></RequiredAuth> }/>
       <Route path={"/payment"} element={<Payment/>}/>
       <Route path ={"/form"} element={<Form/>}/>
    </Routes>
   
    </div>
  );
}

export default App;
