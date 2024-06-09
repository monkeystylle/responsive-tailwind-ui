import Pricing from '@/components/Pricing';
import Faq from '../components/Faq';
import Features from '../components/Features';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Faq />
      <Pricing />
      <Cta />
      <Footer />
    </>
  );
}
