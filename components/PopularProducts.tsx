import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import seeder_icon from '@/assets/45feda724ac02edb093bba43bf26477d.png';
import sprayer from '@/assets/kisspng-sosebee-auto-supply-company-sprayer-herbicide-stih-5b383f10db7441.7705259915304128168989.png';
import harvestor from '@/assets/kisspng-john-deere-model-4020-combine-harvester-agricultur-combine-harvester-5b17f7b9c84613.8055308815282974018203.png';
import tractor from '@/assets/kisspng-new-holland-agriculture-tractor-john-deere-agricul-5aefbfdd885e83.9059355415256616615586.png'
import plough from '@/assets/kisspng-land-pride-inc-seed-drill-tractor-great-plains-m-7-6nt-1-6nt-end-wheel-no-till-drills-land-pri-5bab19c51a5231.6320001615379399091078.png'

const products = [
  { name: 'Tractor', image: tractor, price: 25000 },
  { name: 'Harvester', image: harvestor, price: 35000 },
  { name: 'Sprayer', image: sprayer, price: 5000 },
  { name: 'Plough', image: plough, price: 2000 },
  { name: 'Seeder', image: seeder_icon, price: 3000 },
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