import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/navbar';
import Cart from './components/Cart/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer texto='Tienda E-Commerce' />} />
        <Route path='/categoria/:categoriaId' element={<ItemListContainer texto='Tienda E-Commerce' />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/detalle' element= {<ItemDetailContainer />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
