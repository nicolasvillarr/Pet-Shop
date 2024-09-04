
function ProductItem(  product) {
  return (
    <div className="product-item">
      <img src={`/assets/images/${product.image}`} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductItem;
