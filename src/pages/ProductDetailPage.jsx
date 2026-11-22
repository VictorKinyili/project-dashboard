import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  getProductById,
  updateProduct,
  deleteProduct,
} from "../services/productApi";
import { ConfirmModal } from "../Components/ConfirmModal";

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    category: "Electronics",
    stockStatus: "In stock",
    price: "",
    imageUrl: "",
  });

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const loadProduct = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getProductById(id);
        setProduct(data);
        setFormData({
          name: data.name || "",
          category: data.category || "Electronics",
          stockStatus: data.stockStatus || "In stock",
          price: data.price ?? "",
          imageUrl: data.imageUrl || "",
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || formData.price === "") return;

    setIsSaving(true);
    try {
      const updated = await updateProduct(id, {
        name: formData.name.trim(),
        category: formData.category,
        stockStatus: formData.stockStatus,
        price: Number(formData.price),
        imageUrl: formData.imageUrl.trim(),
      });
      setProduct(updated);
      setIsEditing(false);
    } catch (err) {
      alert(err.message);
    } finally {
      setIsSaving(false);
    }
  };

  const handleConfirmDelete = async () => {
    setIsDeleting(true);
    try {
      await deleteProduct(id);
      setIsDeleteModalOpen(false);
      navigate("/products");
    } catch (err) {
      alert(err.message);
      setIsDeleting(false);
    }
  };

  if (isLoading) {
    return <div className="loading-state">Loading product...</div>;
  }

  if (error || !product) {
    return (
      <section className="page product-detail-page">
        <p className="error-banner">
          {error || "Product not found."}
        </p>
        <Link to="/products" className="back-link">
          ← Back to Products
        </Link>
      </section>
    );
  }

  return (
    <section className="page product-detail-page">
      <div className="detail-top">
        <Link to="/products" className="back-link">
          ← Back to All Products
        </Link>
        <p className="eyebrow">
          Catalogue / Product Details
        </p>
      </div>

      <div className="detail-panel">
        {!isEditing ? (
          <>
            <div className="detail-image">
              {(product.imageUrl || product.image) && (
                <img
                  src={product.imageUrl || product.image}
                  alt={product.name}
                />
              )}
            </div>

            <div className="detail-heading">
              <div>
                <h1>
                  {product.name}
                </h1>
                <p className="detail-meta">
                  {product.category} • {product.stockStatus}
                </p>
              </div>
              <p className="detail-price">
                KSh {Number(product.price).toLocaleString()}
              </p>
            </div>

            <div className="detail-actions">
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="btn-edit"
              >
                Edit Product
              </button>
              <button
                type="button"
                onClick={() => setIsDeleteModalOpen(true)}
                className="btn-delete"
              >
                Delete Product
              </button>
            </div>
          </>
        ) : (
          <form onSubmit={handleUpdateSubmit} className="product-form-fields">
            <h2 className="form-title">
              Edit Product Details
            </h2>

            <div className="form-group">
              <label className="form-label">
                Product Image URL
              </label>
              <input
                type="url"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                placeholder="https://example.com/product.jpg"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Product Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="detail-form-grid">
              <div className="form-group">
                <label className="form-label">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="Electronics">Electronics</option>
                  <option value="Audio">Audio</option>
                  <option value="Accessories">Accessories</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Stock Status
                </label>
                <select
                  name="stockStatus"
                  value={formData.stockStatus}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="In stock">In stock</option>
                  <option value="Low stock">Low stock</option>
                  <option value="Out of stock">Out of stock</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">
                Price (KSh) *
              </label>
              <input
                type="number"
                name="price"
                min="0"
                required
                value={formData.price}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="form-actions">
              <button
                type="button"
                disabled={isSaving}
                onClick={() => setIsEditing(false)}
                className="btn-secondary"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSaving}
                className="btn-primary"
              >
                {isSaving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </form>
        )}
      </div>

      <ConfirmModal
        isOpen={isDeleteModalOpen}
        title="Delete Product"
        message={`Are you sure you want to delete "${product.name}"? This action cannot be undone.`}
        confirmText="Yes, Delete"
        isLoading={isDeleting}
        onConfirm={handleConfirmDelete}
        onCancel={() => setIsDeleteModalOpen(false)}
      />
    </section>
  );
}