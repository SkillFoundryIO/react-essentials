import { useState } from 'react'
import Modal from './components/Modal'
import ProductCard from './components/ProductCard'

function App() {
  // track the selected product and modal state
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // sample data
  const products = [
    {
      id: 1,
      name: "Widget",
      description: "The thing that does the stuff",
      price: 3.99,
      stock: 10
    },
    {
      id: 2,
      name: "Thingamabob",
      description: "Another thing that does even more stuff",
      price: 10.99,
      stock: 5
    },
    {
      id: 3,
      name: "Doohicky",
      description: "No one knows what this really does",
      price: 100.99,
      stock: 17
    }
  ];

  // handle the selection of a product
  function handleViewDetails(product) {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // remove the selected product when the modal closes.
  function handleCloseModal() {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <div className="container py-5">
        <h1 className="text-center mb-5">Product List</h1>
        
        <div className="row">
          {products.map(product => (
            <ProductCard 
            
              key={product.id} 
              product={product} 
              onViewDetails={handleViewDetails} 
            />
          ))}
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={selectedProduct?.name || "Product Details"}
        >
          {selectedProduct && (
            <div>
              <p className="text-muted">{selectedProduct.description}</p>
              <p><strong>Price:</strong> ${selectedProduct.price}</p>
              <p><strong>Stock:</strong> {selectedProduct.stock}</p>
            </div>
          )}
        </Modal>
      </div>
    </>
  )
}

export default App
