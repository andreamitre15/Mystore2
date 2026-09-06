
import React from 'react'

const Navbar = () => (
  <header className="bg-pink-500 text-white shadow-md">
    <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
      {/* Logo / título */}
      <h1 className="text-xl font-bold tracking-wide">Mi Tienda</h1>

      {/* Navegación */}
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="hover:text-pink-200 transition">Home</a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-200 transition">Products</a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-200 transition">About</a>
          </li>
        </ul>
      </nav>

      {/* Carrito */}
      <span className="bg-white text-pink-500 px-3 py-1 rounded-full font-semibold hover:bg-pink-100 transition">
        Cart
      </span>
    </div>
  </header>
)

export default Navbar


