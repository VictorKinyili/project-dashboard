
import { useProducts } from "../Context/useProducts";

function Stock() {
  const { products } = useProducts();
  const lowStockItems = products.filter(
    (product) => product.stockStatus?.toLowerCase() === "low stock",
  ).length;
  const categoryCount = new Set(
    products.map((product) => product.category).filter(Boolean),
  ).size;

  return (
    <section className="stats-grid" aria-label="Store summary">
      <article className="dashboard-card stat-card">
        <p>Total Products</p>
        <strong>{products.length}</strong>
        <span className="positive-change">+12.8% this month</span>
      </article>
      <article className="dashboard-card stat-card">
        <p>Low stock items</p>
        <strong>{lowStockItems}</strong>
        <span className="warning-change">Needs attention</span>
      </article>
      <article className="dashboard-card stat-card">
        <p>Categories</p>
        <strong>{categoryCount}</strong>
        <span className="positive-change">+2 more categories</span>
      </article>
    </section>
  );
}

export default Stock