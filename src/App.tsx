import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Products from './pages/Products';
import { Suspense } from 'react';
import Home from './pages/Home';
import CartPage from './pages/Cart';



const App: React.FC = () => {
  return (
    <div className="container">
      <BrowserRouter >
        <div className="min-h-screen bg-gray-50 text-gray-900">
          <header className="bg-white shadow">
            <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
              <nav className="flex gap-4">
                <Link to="/" className="hover:underline">Home</Link>
                <Link to="/about" className="hover:underline">Products</Link>
                <Link to="/cart" className="hover:underline">Cart</Link>
              </nav>
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
