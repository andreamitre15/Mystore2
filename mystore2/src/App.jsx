import {products} from "./data/products";

import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar.jsx";


function App() {
    return (
    <div>
      <Navbar/>
      <main>
        <h1>Product Catalog</h1>
        <ProductList products={products}/>
      </main>
    </div>
  );
}

export default App;
