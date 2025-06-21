import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import Shoes from "./pages/Shoes";
import Shirts from "./pages/Shirts";
import Jeans from "./pages/Jeans";
import Sunglass from "./pages/sunglass";
import Register from "./pages/Register";
import CartPage from "./pages/CartPage";
import About from "./pages/About";
import MyOrders from "./pages/MyOrders";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Dashboard />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/my-orders" element={<MyOrders />} />

        <Route path="/shoes" element={<Shoes />} />
        <Route path="/sunglass" element={<Sunglass />} />
        <Route path="/shirts" element={<Shirts />} />
        <Route path="/jeans" element={<Jeans />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
