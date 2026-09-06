import { products } from "./data/products";

import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar.jsx";
import GrinBg from "./components/GrinBg.jsx";
import Footer from "./components/Footer.jsx";


function App() {
  return (
    <div>
      <Navbar />
      <GrinBg>  
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Product Catalog</h1>
        <ProductList products={products} />
      </main>  
     </GrinBg>
      <Footer />
    </div>
  );
} 

export default App;
