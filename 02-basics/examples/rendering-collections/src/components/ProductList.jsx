import { useState } from 'react'
import { products } from '../data/sampleData'

function ProductList() {
    const [nameFilter, setNameFilter] = useState('');

    // filter products based on the name
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(nameFilter.toLowerCase())
    );

    return (
        <div>
            <h2>Product Inventory</h2>

            {/* use onChange to call the set function with the new value */}
            <div className="mb-3">
                <label htmlFor="productFilter" className="form-label">
                    Filter by Product Name:
                </label>
                <input id="productFilter" type="text" className="form-control"
                    placeholder="Type here to filter products..."
                    value={nameFilter}
                    onChange={(e) => setNameFilter(e.target.value)} />
            </div>

            {/* count the results */}
            <p className="text-muted">
                Showing {filteredProducts.length} of {products.length} products.
            </p>

            {/* render table only if we have products */}
            {filteredProducts.length > 0 ? (
                <table className="table table-striped table-hover">
                    <thead className="table-dark">
                        <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Stock Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>${product.price}</td>
                            <td>
                            <span className={`badge ${product.inStock ? 'bg-success' : 'bg-danger'}`}>
                                {product.inStock ? 'In Stock' : 'Out of Stock'}
                            </span>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div className="alert alert-info text-center">
                    <h5>No Products Found</h5>
                    <p className="mb-0">
                        No products match your search for <strong>"{nameFilter}"</strong>
                    </p>
                    <small className="text-muted">Try a different search term</small>
                </div>
            )}
        </div>
    );
}

export default ProductList