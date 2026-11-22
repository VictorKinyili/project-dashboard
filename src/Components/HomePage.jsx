import Stock from "./Stock";
import About from "./About";
import Vision from "./Vision"
import Team from "./Team";
import ThemeToggle from "./ThemeToggle";

function HomePage() {
  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <div>
          <p className="eyebrow">Overview</p>
          <h1>Dashboard</h1>
          <p>Welcome back. Here's what's happening in your store today.</p>
        </div>
        <ThemeToggle />
      </header>
      <Stock />
      <div className="dashboard-info-grid">
        <About />
        <Vision />
      </div>
      <Team />
    </div>
  );
}

export default HomePage;