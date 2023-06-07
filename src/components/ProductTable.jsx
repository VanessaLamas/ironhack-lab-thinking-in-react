import React from "react";
import products from '../data.json'
function ProductTable() {
    return (
        <div>
            <table>
                <tr>
                    <td>Name</td>
                    <td>Category</td>
                    <td>Price</td>
                </tr>
                {products.map(product => (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.category}</td>
                        <td>{product.price}</td>
                        <td>{product.inStock}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}
export default ProductTable;

