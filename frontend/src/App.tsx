import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate loading time
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (isLoading) {
  //   return (
  //     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
  //       <div className="text-center">
  //         <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
  //         <h2 className="text-2xl font-bold text-gray-900 mb-2">INFOCUS SOLUTION</h2>
  //         <p className="text-gray-600">Loading your global immigration partner...</p>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;