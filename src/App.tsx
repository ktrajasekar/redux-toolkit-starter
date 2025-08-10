import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Products from './pages/Products';
import { Suspense } from 'react';
import Home from './pages/Home';
import CartPage from './pages/Cart';
import { selectTotalCartValue } from './store/cartSlice';
import { useSelector } from 'react-redux';

import { ShoppingCartIcon } from "@heroicons/react/24/outline";


const App: React.FC = () => {
  const totalCartValue = useSelector(selectTotalCartValue);

  return (
    <div className="container">
      <BrowserRouter >
        <div className="min-h-screen bg-gray-50 text-gray-900">
          <header className="bg-white shadow">
            <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">

              {/* Left: Navigation Links */}
              <nav className="flex gap-4">
                <Link to="/" className="hover:underline">Home</Link>
                <Link to="/about" className="hover:underline">Products</Link>
              </nav>

              {/* Right: Cart */}
              <div className="flex items-center gap-3">
                <Link to="/cart" className="relative flex items-center gap-1 hover:text-blue-600">
                  <ShoppingCartIcon className="h-6 w-6" />
                  {totalCartValue > 0 && (
                    <span className="text-blue-600 font-semibold">
                      ₹ {totalCartValue}
                    </span>
                  )}
                </Link>
              </div>

            </div>
          </header>

          <main className="max-w-4xl mx-auto mt-8 px-4">
            <Suspense fallback={<div>Loading...</div>}>

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Products />} />
                <Route path="/cart" element={<CartPage />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
