import logo from './logo.svg';
import './App.css';

import AddProduct from './Components/AddProduct';
import ButtonAppBar from './Components/ButtonAppBar';
import LandingPage from './Pages/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddWarehouse from './Components/AddWarehouse';
import AddAccessories from './Components/AddAccessories';
import LoginPage from './Pages/LoginPage';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<LoginPage/>}/>
        <Route path="/dashboard" element={<LandingPage/>}/>
        <Route path="/add-product" element={<AddProduct/>}/>
        <Route path="/add-warehouse" element={<AddWarehouse/>}/>
        <Route path="/add-accessories" element={<AddAccessories/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
