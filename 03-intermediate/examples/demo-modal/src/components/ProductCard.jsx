function ProductCard({ product, onViewDetails }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <div className="card-body text-center">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text text-muted">{product.description}</p>
          <button 
            className="btn btn-outline-primary" 
            onClick={() => onViewDetails(product)}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;