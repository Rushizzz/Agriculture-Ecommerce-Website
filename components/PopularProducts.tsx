import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';

const products = [
  { name: 'Tractor', image: 'https://images.unsplash.com/photo-1605338803155-8b46e8af0a60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', price: 25000 },
  { name: 'Harvester', image: 'https://images.unsplash.com/photo-1605338803155-8b46e8af0a60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', price: 35000 },
  { name: 'Sprayer', image: 'https://images.unsplash.com/photo-1605338803155-8b46e8af0a60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', price: 5000 },
  { name: 'Plough', image: 'https://images.unsplash.com/photo-1605338803155-8b46e8af0a60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', price: 2000 },
  { name: 'Seeder', image: 'https://images.unsplash.com/photo-1605338803155-8b46e8af0a60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', price: 3000 },
];

const PopularProducts = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">Popular Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                />
                <button className="absolute top-2 right-2 p-1 rounded-full bg-white text-gray-600 hover:text-red-500 transition-colors duration-300">
                  <Heart size={20} />
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">${product.price.toLocaleString()}</p>
                <Link href={`/product/${product.name.toLowerCase()}`} className="block text-center bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors duration-300">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;