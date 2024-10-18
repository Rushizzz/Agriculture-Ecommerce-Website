import Banner from '@/components/Banner';
import Categories from '@/components/Categories';
import Brands from '@/components/Brands';
import PopularProducts from '@/components/PopularProducts';
import Crops from '@/components/Crops';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Banner />
      <Categories />
      <Brands />
      <PopularProducts />
      <Crops />
    </div>
  );
}