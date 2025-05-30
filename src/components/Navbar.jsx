import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="ml-2 text-xl font-bold text-gray-900">
                Mert Uysal Makina
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            {/* <Link to="/products" className="text-gray-700 hover:text-blue-600">
              Ürünler
            </Link> */}
            <Link to="/about" className="text-gray-700 hover:text-blue-600">
              Hakkımızda
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
