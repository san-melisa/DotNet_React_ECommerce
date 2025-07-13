import { useEffect, useState } from "react";
import { IProduct } from "../model/IProduct";
import Header from "./Header";
import ProductList from "./ProductList";

function App() {

  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
  fetch("http://localhost:5270/api/products")
    .then(response => response.json())
    .then(data => setProducts(data));
  }, []);

  function addProduct() {
    setProducts([...products,
    { id: Date.now(), name: 'Product 4', price: 400, isActive: true, stock: 10, description: 'Description of Product 4', imageUrl: 'https://via.placeholder.com/150' }]);
  }

  return (
    <>
      <Header />
      <ProductList products={products} addProduct={addProduct} />
    </>
  )
}

export default App
