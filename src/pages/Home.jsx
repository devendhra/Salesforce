import Customers from '../components/Home/Customers';
import Hero from '../components/Home/Hero';
import Layout from '../components/Layout';
import Navbar from '../components/common/Navbar.jsx';
import Ourfeatures from '../components/Home/Ourfeatures';
import Products from '../components/Home/Products';
import Questions from '../components/Home/Questions';
import Reviews from '../components/Home/Reviews';
import Seepricing from '../components/Home/Seepricing';
import Trust from '../components/Home/Trust';
import Values from '../components/Home/Values';

function Home() {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <Products />
      <Trust />
      <Values />
      <Customers />
      <Seepricing />
      <Ourfeatures />
      <Reviews />
      <Questions />
    </ Layout >
  );
}

export default Home;
