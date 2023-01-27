import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { Cart } from './Cart/Cart';
import { Loader } from './features/Loader';
import { Productcard } from './features/Productcard';
import { loadProducts } from './features/ProductSlice';
import { About } from './About/About';

function App() {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);
  return (
    <div className="App">
      <header>
        <h1 className='main-font'>Shopping Cart, created by Wilman El Zelah</h1>
        <Link to="/about" className='info-link material-symbols-outlined'>
          info
        </Link>
      </header>
      <Routes>
        <Route path='/' element={
          <main className='home-page'>
            <section id='products'>
              <h2 className='main-font'>PRODUCTS</h2>
              {(products.isloading && !products.loaded) ? <Loader /> : products.data.map((item, index) => {
                return <Productcard product={item} key={index} />
              })}
            </section>
            <section id='cart'>
              <h2 className='main-font'>
                CART
                <span className='material-symbols-outlined cart-icon'>
                  shopping_cart
                </span>
              </h2>
              <Cart />
            </section>
          </main>
        } />
        <Route path='/about' element={<About />} />
      </Routes>
    </div >
  );
}

export default App;
