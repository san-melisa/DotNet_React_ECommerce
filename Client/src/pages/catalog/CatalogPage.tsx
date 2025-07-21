import { useEffect, useState } from "react";
import { IProduct } from "../../model/IProduct";
import ProductList from "./ProductList";
import { CircularProgress } from "@mui/material";
import requests from "../../requests";

export default function CatalogPage() {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //fetch("http://localhost:5270/api/products")
            //.then(response => response.json())
        requests.Catalog.list()
            .then(data => setProducts(data))
            .finally(() => setLoading(false));

    }, []);

    if(loading) return <CircularProgress />;
    

    return (
        <ProductList products={products} />
    );
}