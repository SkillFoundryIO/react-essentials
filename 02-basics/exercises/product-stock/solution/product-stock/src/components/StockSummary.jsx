function StockSummary({inStock, lowStock, reorder}) {
    return (
        <div className="row mt-4">
            <div className="row mt-4">
                <div className="col-md-4">
                    <div className="card text-center">
                        <div className="card-body">
                            <h5 className="card-title text-success">In Stock</h5>
                            <p className="card-text display-6">
                                {inStock}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-center">
                        <div className="card-body">
                            <h5 className="card-title text-warning">Low Stock</h5>
                            <p className="card-text display-6">
                                {lowStock}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-center">
                        <div className="card-body">
                            <h5 className="card-title text-danger">Need Reorder</h5>
                            <p className="card-text display-6">
                                {reorder}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StockSummary;