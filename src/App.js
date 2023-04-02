import Products from "./components/Products";

import ProductsProvider from "./context/ProductsContext";

function App() {

  return (

    <ProductsProvider>

      <Products />

    </ProductsProvider>

  );

}

export default App;
