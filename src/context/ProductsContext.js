import { createContext, useState } from "react";

export const ProductContext = createContext();

function ProductsProvider(props) {
    const [products, setProducts] = useState([]);

    return (
        <ProductContext.Provider value={[products, setProducts]}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductsProvider;