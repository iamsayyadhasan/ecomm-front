import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiShoppingCart, FiUser, FiMenu, FiX, FiLogOut } from "react-icons/fi";
import { useAuth } from "../context/AuthContext"; // 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth(); 

  
  const handleLogout = () => {
    logout(); 
    navigate("/login");
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-7 py-7 flex justify-between items-center">
        
        <Link to="/" className="text-2xl font-bold tracking-wide text-white">
          Urban<span className="text-indigo-500">Wear</span>
        </Link>

        
        <div className="hidden md:flex items-center space-x-8 text-lg font-medium">
          <Link to="/shirts" className="hover:text-indigo-400 transition">Shirts</Link>
          <Link to="/jeans" className="hover:text-indigo-400 transition">Jeans</Link>
          <Link to="/shoes" className="hover:text-indigo-400 transition">Shoes</Link>
          <Link to="/about" className="hover:text-indigo-400 transition">About</Link>

          {user ? (
            <>
              <span className="text-indigo-300">👤 {user.firstName}</span>
              <button
                onClick={handleLogout}
                className="hover:text-red-400 transition flex items-center gap-1"
              >
                <FiLogOut className="text-xl" />
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="hover:text-indigo-400 transition flex items-center gap-1">
              <FiUser className="text-xl" />
              <span>Login</span>
            </Link>
          )}

          <Link to="/cart" className="hover:text-indigo-400 transition flex items-center gap-1">
            <FiShoppingCart className="text-xl" />
            <span>Cart</span>
          </Link>
        </div>

       
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <FiX className="w-7 h-7" /> : <FiMenu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden px-6 pb-6 pt-3 space-y-4 text-base font-medium bg-gray-800 text-white rounded-b-lg">
          <Link to="/shirts" className="block hover:text-indigo-400">Shirts</Link>
          <Link to="/jeans" className="block hover:text-indigo-400">Jeans</Link>
          <Link to="/shoes" className="block hover:text-indigo-400">Shoes</Link>
          <Link to="/About" className="block hover:text-indigo-400">About</Link>

          {user ? (
            <>
              <span className="block text-indigo-300">👤 {user.firstName}</span>
              <button
                onClick={handleLogout}
                className="block hover:text-red-400 transition flex items-center gap-2"
              >
                <FiLogOut />
                <span>Logout</span>
              </button>
            </>
          ) : (
            <Link to="/login" className="block hover:text-indigo-400 flex items-center gap-2">
              <FiUser />
              <span>Login</span>
            </Link>
          )}

          <Link to="/cart" className="block hover:text-indigo-400 flex items-center gap-2">
            <FiShoppingCart />
            <span>Cart</span>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
