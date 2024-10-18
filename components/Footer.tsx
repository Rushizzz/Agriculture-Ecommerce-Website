import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">My Account</h3>
            <ul className="space-y-2">
              <li><Link href="/account/profile" className="hover:text-green-600">Profile</Link></li>
              <li><Link href="/account/login" className="hover:text-green-600">Sign in</Link></li>
              <li><Link href="/account/register" className="hover:text-green-600">Register</Link></li>
              <li><Link href="/account/orders" className="hover:text-green-600">Order status</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link href="/products" className="hover:text-green-600">Most Popular</Link></li>
              <li><Link href="/brands" className="hover:text-green-600">Brands</Link></li>
              <li><Link href="/categories" className="hover:text-green-600">Categories</Link></li>
              <li><Link href="/crops" className="hover:text-green-600">Crops</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li><Link href="/shipping" className="hover:text-green-600">Shipping</Link></li>
              <li><Link href="/returns" className="hover:text-green-600">Returns</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-green-600">About us</Link></li>
              <li><Link href="/contact" className="hover:text-green-600">Contact us</Link></li>
              <li><Link href="/testimonials" className="hover:text-green-600">Testimonials</Link></li>
              <li><Link href="/faq" className="hover:text-green-600">FAQ's</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left mb-4 md:mb-0">&copy; 2023 AgriTech Equipment. All rights reserved.</p>
          <div className="flex space-x-4">
            <Facebook className="text-gray-400 hover:text-gray-600 cursor-pointer" size={24} />
            <Twitter className="text-gray-400 hover:text-gray-600 cursor-pointer" size={24} />
            <Instagram className="text-gray-400 hover:text-gray-600 cursor-pointer" size={24} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;