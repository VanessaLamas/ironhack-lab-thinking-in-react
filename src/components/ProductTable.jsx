import React, { useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import SearchBar from './SearchBar';
import SearchCheck from './SearchCheck';
import ProductsData from '../data.json';

function ProductTable() {
    const [products, setProducts] = useState(ProductsData);
    // searchbar
    const handleSearch = (searchTerm) => {
        const filteredProducts = ProductsData.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setProducts(filteredProducts);
    };
    // checkbox
    const handleCheckbox = () => {
        if (products.length !== ProductsData.length) {
            setProducts(ProductsData);
        } else {
            const filteredProductsInStock = ProductsData.filter(product =>
                product.inStock
            );
            setProducts(filteredProductsInStock);
        }
    };
    return (
        <div>
            <SearchBar handleSearch={handleSearch} />
            <SearchCheck handleCheckbox={handleCheckbox} />
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
