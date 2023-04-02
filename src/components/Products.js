import { useContext, useEffect } from "react";

// import { useRecoilState } from "recoil";

// import productsState from "../atoms/ProductsAtom";

import { ProductContext } from "../context/ProductsContext";

import ProductCard from "./ProductCard";

function Products() {

    const [products, setProducts] = useContext(ProductContext);

    // const [products, setProducts] = useRecoilState(productsState);

    console.log(products);

    useEffect(() => {

        fetch("https://fakestoreapi.com/products")
            
            .then(response => response.json())

            .then(products => setProducts(products));
        
    }, []);

    const elements = products.map(product => {

        return <ProductCard key={product.id}>

            <ProductCard.CardHead product={product} />

            <ProductCard.CardBody product={product} />

            <ProductCard.CardFoot product={product} />

        </ProductCard>

    });

    return <div className="row">{elements}</div>

}

export default Products;