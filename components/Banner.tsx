import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className="relative h-[300px] md:h-[500px] w-full">
      <Image
        src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        alt="Agricultural field"
        layout="fill"
        objectFit="cover"
        className="brightness-50"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">Best Deals on Agricultural Products</h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8">Explore different categories. Find the best deals.</p>
        <Link href="/products" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-full transition duration-300">
          Shop now
        </Link>
      </div>
    </div>
  );
};

export default Banner;