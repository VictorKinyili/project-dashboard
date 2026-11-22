import { useState, useId } from "react";
import { useNavigate, Link } from "react-router-dom";
import { validateProduct } from "../utils/validateProduct";
import { useProducts } from "../Context/useProducts";

export default function AddProduct() {
  const navigate = useNavigate();
  const baseId = useId();
  const { addProduct } = useProducts();

  const [formData, setFormData] = useState({
    name: "",
    category: "Electronics",
    price: "",
    stockStatus: "In stock",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);

    const { isValid, errors: validationErrors } = validateProduct(formData);
    if (!isValid) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    try {
      await addProduct({
        name: formData.name.trim(),
        category: formData.category.trim(),
        price: Number(formData.price),
        stockStatus: formData.stockStatus,
      });
      navigate("/products");
    } catch {
      setSubmitError("Could not save product. Make sure JSON Server is running on port 3001.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="page add-product-page">
      <Link to="/products" className="back-link">
        &larr; Back to Products
      </Link>

      <div className="product-form">
        <span className="eyebrow">Catalogue</span>
        <h1 className="form-title">Add New Product</h1>
        <p className="form-description">Create a new product entry for the K-TECH store.</p>

        {submitError && (
          <div className="error-banner">
            {submitError}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="product-form-fields">
          {/* Product Name */}
          <div className="form-group">
            <label htmlFor={`${baseId}-name`}             className="form-label">
              Product Name
            </label>
            <input
              id={`${baseId}-name`}
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g., Wireless Mouse"
              className="form-control"
            />
            {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
          </div>

          {/* Category */}
          <div className="form-group">
            <label htmlFor={`${baseId}-category`}             className="form-label">
              Category
            </label>
            <select
              id={`${baseId}-category`}
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="form-control"
            >
              <option value="Electronics">Electronics</option>
              <option value="Audio">Audio</option>
              <option value="Accessories">Accessories</option>
            </select>
            {errors.category && <p className="mt-1 text-xs text-red-600">{errors.category}</p>}
          </div>

          {/* Price */}
          <div className="form-group">
            <label htmlFor={`${baseId}-price`}             className="form-label">
              Price (KSh)
            </label>
            <input
              id={`${baseId}-price`}
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              placeholder="e.g., 3500"
              className="form-control"
            />
            {errors.price && <p className="mt-1 text-xs text-red-600">{errors.price}</p>}
          </div>

          {/* Stock Status */}
          <div className="form-group">
            <label htmlFor={`${baseId}-stockStatus`}             className="form-label">
              Stock Status
            </label>
            <select
              id={`${baseId}-stockStatus`}
              name="stockStatus"
              value={formData.stockStatus}
              onChange={handleChange}
              className="form-control"
            >
              <option value="In stock">In stock</option>
              <option value="Low stock">Low stock</option>
              <option value="Out of stock">Out of stock</option>
            </select>
            {errors.stockStatus && <p className="mt-1 text-xs text-red-600">{errors.stockStatus}</p>}
          </div>

          <div className="form-actions">
            <Link
              to="/products"
              className="btn-secondary"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={submitting}
              className="btn-primary"
            >
              {submitting ? "Saving..." : "Create Product"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}