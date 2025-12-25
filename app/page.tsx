import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyHydro from './components/WhyHydro';
import Calculator from './components/Calculator';
import ContactForm from './components/ContactForm';
import ProductCard from './components/ProductCard';
import { turbines } from './data';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F1E8DF]">
      <Navbar />
      <Hero />
      <WhyHydro />

      {/* Product Showcase Section */}
      <section id="products" className="py-24 bg-[#F1E8DF] border-b border-[#d4cfc9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#ea580c] font-bold tracking-widest uppercase text-xs">Catalogue 2025</span>
            <h2 className="text-4xl font-bold font-display text-[#121C1E] mt-2 mb-4 uppercase">Nos Turbines</h2>
            <div className="w-24 h-1 bg-[#d4cfc9] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {turbines.map((turbine) => (
              <ProductCard key={turbine.id} product={turbine} />
            ))}
          </div>
        </div>
      </section>

      <Calculator />
      <ContactForm />

      <footer className="bg-[#121C1E] text-[#F1E8DF]/60 py-12 border-t border-[#121C1E]">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm md:flex justify-between items-center">
          <p>&copy; {new Date().getFullYear()} BZH Turbines. Tous droits réservés.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-[#F1E8DF] transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-[#F1E8DF] transition-colors">CGV</a>
            <a href="#" className="hover:text-[#F1E8DF] transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
