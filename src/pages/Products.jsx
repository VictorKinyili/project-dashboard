import { useEffect, useId, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useDebounce from "../Hooks/useDebounce";
import { useProducts } from "../Context/useProducts";
import ProductCard from "../Components/ProductCard";

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 300);
  const searchId = useId();
  const searchRef = useRef(null);
  const { products, loading, error, editProduct, removeProduct } = useProducts();
  const [actionError, setActionError] = useState("");

  useEffect(() => {
    function focusSearch(event) {
      if (event.key === "/" && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName)) {
        event.preventDefault();
        searchRef.current?.focus();
      }
    }
    window.addEventListener("keydown", focusSearch);
    return () => window.removeEventListener("keydown", focusSearch);
  }, []);

  const filteredProducts = products.filter((product) =>
    `${product.name} ${product.category}`
      .toLowerCase()
      .includes(debouncedSearch.trim().toLowerCase()),
  );

  async function handleEdit(product) {
    const price = window.prompt(
      `Enter new price for ${product.name}:`,
      product.price,
    );
    if (price === null || price.trim() === "" || Number.isNaN(Number(price))) return;

    try {
      setActionError("");
      await editProduct(product.id, { price: Number(price) });
    } catch {
      setActionError("Could not update the product. Please try again.");
    }
  }

  async function handleDelete(product) {
    if (!window.confirm(`Delete "${product.name}"?`)) return;
    try {
      setActionError("");
      await removeProduct(product.id);
    } catch {
      setActionError("Could not delete the product. Please try again.");
    }
  }

  return (
    <section className="page products-page">
      <header className="page-header">
        <div>
          <span className="eyebrow">Catalogue</span>
          <h1>Products</h1>
          <p>Manage your product catalogue, pricing and stock.</p>
        </div>
        <Link className="btn-primary" to="/products/new">+ Add product</Link>
      </header>

      <div className="search-box">
        <label className="sr-only" htmlFor={searchId}>Search products by name</label>
        <input
          id={searchId}
          ref={searchRef}
          type="search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search products by name..."
        />
      </div>

      {actionError && <p className="error-banner">{actionError}</p>}
      {error && <p className="error-banner">{error}. Start the JSON server and refresh.</p>}
      {loading ? (
        <p className="loading-state">Loading products...</p>
      ) : filteredProducts.length === 0 ? (
        <p className="empty-state">No products match "{debouncedSearch}".</p>
      ) : (
        <>
          <h2 className="section-title">All products ({filteredProducts.length})</h2>
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
