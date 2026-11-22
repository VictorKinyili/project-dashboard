import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "80px 20px" }}>
      <p style={{ color: "#2563eb", fontWeight: "bold" }}>404 ERROR</p>
      <h1>Page Not Found</h1>
      <p style={{ color: "#64748b", marginBottom: "24px" }}>
        The page you are looking for does not exist.
      </p>
      <Link to="/" style={{ backgroundColor: "#2563eb", color: "#fff", padding: "10px 18px", borderRadius: "8px", textDecoration: "none" }}>
        Back to Dashboard
      </Link>
    </div>
  );
}

export default NotFound;
