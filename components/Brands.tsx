import Image from 'next/image';
import Link from 'next/link';
import new_holland_icon from '@/assets/new_holland.png';
import john_deere_icon from '@/assets/john_deere.png';
const brands = [
  { name: 'TATA', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/2560px-Tata_logo.svg.png' },
  { name: 'John Deere', logo: john_deere_icon},
  { name: 'New Holland', logo:  new_holland_icon},
];

const Brands = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Explore by Brands</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 ">
          {brands.map((brand, index) => (
            <Link key={index} href={`/brand/${brand.name.toLowerCase()}`} className="group">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={150}
                  height={150}
                  objectFit="contain"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;