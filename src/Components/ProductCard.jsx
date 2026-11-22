import { Link } from "react-router-dom";

export default function ProductCard({ product, onEdit, onDelete }) {
  const stockStatus = product.stockStatus || (product.inStock ? "In stock" : "Out of stock");
  const stockClass = stockStatus.toLowerCase().replaceAll(" ", "-");

  return (
    <article className="product-card">
      <Link className="product-image" to={`/products/${product.id}`} aria-label={`View ${product.name}`}>
        {product.imageUrl || product.image ? (
          <img src={product.imageUrl || product.image} alt="" />
        ) : (
          <span>KT</span>
        )}
      </Link>
      <div className="product-card-body">
        <Link className="product-name" to={`/products/${product.id}`}>{product.name}</Link>
        <p className="product-meta">{product.category} <span>•</span> {stockStatus}</p>
        <span className={`stock-badge ${stockClass}`}>{stockStatus}</span>
        <p className="product-price">KSh {Number(product.price).toLocaleString("en-KE")}</p>
        <div className="card-actions">
          <button type="button" className="btn-edit" onClick={() => onEdit(product)}>Edit</button>
          <button type="button" className="btn-delete" onClick={() => onDelete(product)}>Delete</button>
        </div>
      </div>
    </article>
  );
}
