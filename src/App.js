import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Cart from "./componentes/Cart/Cart"
import Checkout from "./componentes/Checkout/Checkout"

import { CartProvider } from './Context/CartContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
       <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"Todos los Productos"}/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Productos por Categoria"}/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element ={<Checkout/>}/>
          <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
