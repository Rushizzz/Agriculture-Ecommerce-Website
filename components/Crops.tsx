import Image from 'next/image';
import Link from 'next/link';

const crops = [
  { name: 'Wheat', image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
  { name: 'Rice', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
  { name: 'Tomato', image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80' },
  { name: 'Onion', image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' },
];

const Crops = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Crops</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {crops.map((crop, index) => (
            <Link key={index} href={`/crop/${crop.name.toLowerCase()}`} className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-40">
                  <Image
                    src={crop.image}
                    alt={crop.name}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-center">{crop.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/crops" className="inline-block bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 transition-colors duration-300">
            Explore more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Crops;