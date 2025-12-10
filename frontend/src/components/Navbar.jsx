import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-800">Ecommerce App</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium text-gray-700">
          <li className="cursor-pointer hover:text-blue-600 duration-200"
              onClick={() => scrollToSection("home")}>Home</li>
          <li className="cursor-pointer hover:text-blue-600 duration-200"
              onClick={() => scrollToSection("categories")}>Categories</li>
               <li className="cursor-pointer hover:text-blue-600 duration-200"
              onClick={() => scrollToSection("products")}>Products</li>
          <li className="cursor-pointer hover:text-blue-600 duration-200"
              onClick={() => scrollToSection("articles")}>Articles</li>
          <li className="cursor-pointer hover:text-blue-600 duration-200"
              onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <ul className="md:hidden bg-white shadow-md py-4 space-y-4 text-center text-lg font-medium text-gray-700">
          <li
            className="cursor-pointer hover:text-blue-600"
            onClick={() => scrollToSection("home")}
          >
            Home
          </li>
          <li
            className="cursor-pointer hover:text-blue-600"
            onClick={() => scrollToSection("categories")}
          >
            Categories
          </li>
          <li
            className="cursor-pointer hover:text-blue-600"
            onClick={() => scrollToSection("articles")}
          >
            Articles
          </li>
          <li
            className="cursor-pointer hover:text-blue-600"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
