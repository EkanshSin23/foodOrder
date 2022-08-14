
import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';
import './App.css';
import { DarkModeContext } from './context/darkMode';
import Checkout from './pages/checkout/Checkout';
import Home from './pages/home/Home';
import './style/dark.scss'

function App() {
  const { darkMode } = useContext(DarkModeContext)
  return (<>
    <div className={darkMode ? "app dark" : "app"}>
      <CartProvider>
        <Routes>
          <Route path='/' >
            <Route index element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Routes>


      </CartProvider>
    </div>


  </>
  );
}

export default App;
