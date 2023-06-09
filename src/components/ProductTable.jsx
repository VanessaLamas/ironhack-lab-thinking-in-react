import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import SearchBar from './SearchBar';
import { useState } from "react";
import ProductsData from '../data.json';

function ProductTable() {
    // form copy
    const [products, setProducts] = useState(ProductsData);
    // searchbar filters
    const handleSearch = (searchTerm) => {
        const filteredProducts = ProductsData.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setProducts(filteredProducts);
    };
    return (
        <div>
            <SearchBar handleSearch={handleSearch} />
            <ListGroup horizontal>
                <ListGroup.Item className="w-50 mx-auto" variant="secondary"><h4>Name</h4></ListGroup.Item>
                <ListGroup.Item className="w-50 mx-auto" variant="secondary"><h4>Price</h4></ListGroup.Item>
            </ListGroup>
            {products.map(product => (
                <ListGroup horizontal key={product.id}>
                    <ListGroup.Item className={`w-50 mx-auto ${product.inStock ? "" : "text-danger"}`}>{product.name}</ListGroup.Item>
                    <ListGroup.Item className={`w-50 mx-auto ${product.inStock ? "" : "text-danger"}`}>{product.price}</ListGroup.Item>
                </ListGroup>
            ))}
        </div>
    );
}

export default ProductTable;
