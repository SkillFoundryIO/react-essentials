import products from '../data/sampleData.js'
import StockSummary from './StockSummary.jsx'

function ProductInventory() {
    // Function to determine status and styling based on quantity
    const getStatusInfo = (quantity) => {
        if (quantity === 0) {
            return {
                text: "reorder",
                className: "badge bg-danger"
            };
        } else if (quantity <= 5) {
            return {
                text: "low stock",
                className: "badge bg-warning"
            };
        } else {
            return {
                text: "in stock",
                className: "badge bg-success"
            };
        }    
    };

    const inStock = products.filter(p => p.quantity > 5).length;
    const lowStock = products.filter(p => p.quantity > 0 && p.quantity <= 5).length;
    const reorder = products.filter(p => p.quantity === 0).length;

    return (
        <div className="row mt-4 mb-4">
            <div className="col-12">
                <div className="table-responsive">
                    <table className="table table-striped table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th>ID</th>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => {
                                // create status info object
                                const statusInfo = getStatusInfo(product.quantity);

                                return (
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.quantity}</td>
                                        <td>${product.price.toFixed(2)}</td>
                                        <td>
                                            <span className={statusInfo.className}>
                                                {statusInfo.text}
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <StockSummary inStock={inStock} lowStock={lowStock} reorder={reorder} />
            </div>
        </div>
    );
};

export default ProductInventory;