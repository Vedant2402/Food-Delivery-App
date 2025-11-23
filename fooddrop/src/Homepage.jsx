import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedRestaurants from './components/FeaturedRestaurants';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';

function Homepage() {
  return (
    <div className="min-h-screen bg-bg pb-20 md:pb-0">
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedRestaurants />
      <Footer />
      <BottomNav />
    </div>
  );
}

export default Homepage;