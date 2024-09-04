import ProductItem from './ProductItem';
import products from '../helpers/api.json'


function ProductList() {
  return (
    <div className="product-list">
      {products.map(e => (
        <ProductItem key={e.id} product={e} />
      ))}
    </div>
  );
}

export default ProductList;
