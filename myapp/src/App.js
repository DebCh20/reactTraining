import logo from './logo.svg';
import './App.css';
import Increment from './Components/Increment.jsx'
import ProductGallery from './ProductsPage/ProductGallery.jsx';
import ConditionalRendering from './Components/ConditionalRendering.jsx';
import { Route, Routes } from 'react-router-dom';
import Passport from './PassportPage/Passport.jsx';
import RegularPassport from './PassportPage/RegularPassport.jsx';
import Talkal from './PassportPage/Talkal.jsx';
import ProductDetail from './ProductsPage/ProductDetail.jsx';
import ClassComp from './Components/ClassComp.jsx';
function App() {
  return (
    <div className="App">    
      <br/>
      <Routes>
      <Route path='/condition' element={<ConditionalRendering/>} ></Route>      
      <Route path='/' element={<Increment/>} ></Route>      
      <Route path='/Increment' element={<Increment/>} ></Route>      
      <Route path='/prodGall' element={<ProductGallery/>} ></Route>      
      <Route path='/classcomp' element={<ClassComp/>} ></Route>      
      <Route path='/passport' element={<Passport/>} >
            <Route path='/passport/regular' element={<RegularPassport/>} ></Route>
            <Route path='/passport/tatkal' element={<Talkal/>} ></Route>
      </Route>
      <Route path='/productDetail/:prodid' element={<ProductDetail/>}></Route>      
      {/*  */}
      
      </Routes>
    </div>
  );
}

export default App;
