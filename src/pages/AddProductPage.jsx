import { useState, useId } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import { validateProduct } from "../utils/validateProduct";

export default function AddProductPage() {
  const { addProduct } = useProducts();
  const navigate = useNavigate();

  const nameId = useId();
  const categoryId = useId();
  const priceId = useId();
  const stockId = useId();
  const descriptionId = useId();

  const [formData, setFormData] = useState({
    name: "",
    category: "Electronics",
    price: "",
    stockStatus: "In stock",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));

    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: "" }));
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitError(null);

    const validationErrors = validateProduct(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setSubmitting(true);
      await addProduct({
        name: formData.name.trim(),
        category: formData.category.trim(),
        price: Number(formData.price),
        stockStatus: formData.stockStatus,
        description: formData.description.trim(),
      });

      setSuccessMessage("Product added! Redirecting to catalogue...");
      setTimeout(() => {
        navigate("/products");
      }, 800);
    } catch (err) {
      setSubmitError("Could not save the product. Make sure JSON Server is running.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="add-product-page">
      <header className="page-header">
        <div>
          <span className="eyebrow">CATALOGUE</span>
          <h1>Add product</h1>
          <p>Create a new product listing for the K-TECH store.</p>
        </div>

        <Link to="/products" className="btn-secondary">
          Back to products
        </Link>
      </header>

      <form onSubmit={handleSubmit} className="product-form" noValidate>
        {submitError && <p className="error-banner">{submitError}</p>}
        {successMessage && <p className="success-banner">{successMessage}</p>}

        <div className="form-group">
          <label htmlFor={nameId}>Product name</label>
          <input
            id={nameId}
            type="text"
            name="name"
            placeholder="e.g. Wireless Mouse"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="field-error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor={categoryId}>Category</label>
          <select
            id={categoryId}
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="Electronics">Electronics</option>
            <option value="Audio">Audio</option>
            <option value="Accessories">Accessories</option>
            <option value="Computers">Computers</option>
          </select>
          {errors.category && (
            <span className="field-error">{errors.category}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor={priceId}>Price (KSh)</label>
          <input
            id={priceId}
            type="number"
            name="price"
            placeholder="e.g. 2500"
            value={formData.price}
            onChange={handleChange}
          />
          {errors.price && <span className="field-error">{errors.price}</span>}
        </div>

        <div className="form-group">
          <label htmlFor={stockId}>Stock status</label>
          <select
            id={stockId}
            name="stockStatus"
            value={formData.stockStatus}
            onChange={handleChange}
          >
            <option value="In stock">In stock</option>
            <option value="Low stock">Low stock</option>
            <option value="Out of stock">Out of stock</option>
          </select>
          {errors.stockStatus && (
            <span className="field-error">{errors.stockStatus}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor={descriptionId}>Description (optional)</label>
          <textarea
            id={descriptionId}
            name="description"
            rows="3"
            placeholder="Short summary of the product..."
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className="form-actions">
          <Link to="/products" className="btn-secondary">
            Cancel
          </Link>
          <button type="submit" className="btn-primary" disabled={submitting}>
            {submitting ? "Saving..." : "Save product"}
          </button>
        </div>
      </form>
    </div>
  );
}