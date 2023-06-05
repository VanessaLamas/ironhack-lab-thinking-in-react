import React from "react";
import products from '../data.json'
function ProductPage() {
    return (
        <div>
            <h1>Hola</h1>
            {products.map(product => {
                return (
                    <tr key={product.id}>
                        <p>{product.category}</p>
                    </tr>
                );
            })}
        </div>
    );
}
export default ProductPage;