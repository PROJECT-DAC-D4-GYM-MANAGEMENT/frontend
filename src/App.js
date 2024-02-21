import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signup from './pages/signup/signup';
import Signin from './pages/signin/signin';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/home/home';
import Plan from './pages/plan/plan';
import Success from './pages/success/succes';
import Admin from './components/admin/admin';
import Product from './pages/product/product';
import Cart from './pages/cart/cart';

function App() {
  return (
    <div className="App">
  
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/plans" element={<Plan/>}/>
      <Route path="/success" element={<Success/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/store" element={<Product/>}/> 
      <Route path="/cart" element={<Cart/>}/> 
     </Routes>
     <ToastContainer />
    </div>
  );
}

export default App;
