'use client';

import Link from 'next/link';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">AgriTech</Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-green-400 transition">Home</Link>
          <Link href="/categories" className="hover:text-green-400 transition">Categories</Link>
          <Link href="/brands" className="hover:text-green-400 transition">Brands</Link>
          <Link href="/about" className="hover:text-green-400 transition">About</Link>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search products"
              className="bg-gray-800 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
          </div>
          <ShoppingCart className="text-gray-400 hover:text-white cursor-pointer" size={24} />
          <Link href="/account">
            <User className="text-gray-400 hover:text-white cursor-pointer" size={24} />
          </Link>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="text-gray-400 hover:text-white cursor-pointer" size={24} />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <Link href="/" className="block py-2 hover:text-green-400 transition">Home</Link>
          <Link href="/categories" className="block py-2 hover:text-green-400 transition">Categories</Link>
          <Link href="/brands" className="block py-2 hover:text-green-400 transition">Brands</Link>
          <Link href="/about" className="block py-2 hover:text-green-400 transition">About</Link>
          <div className="relative mt-2">
            <input
              type="text"
              placeholder="Search products"
              className="w-full bg-gray-800 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;