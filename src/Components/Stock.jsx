
function Stock() {
  return (
    <section className="stats-grid" aria-label="Store summary">
      <article className="dashboard-card stat-card">
        <p>Total Products</p>
        <strong>248</strong>
        <span className="positive-change">+12.8% this month</span>
      </article>
      <article className="dashboard-card stat-card">
        <p>Low stock items</p>
        <strong>18</strong>
        <span className="warning-change">Needs attention</span>
      </article>
      <article className="dashboard-card stat-card">
        <p>Categories</p>
        <strong>12</strong>
        <span className="positive-change">+2 more categories</span>
      </article>
    </section>
  );
}

export default Stock