import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  getProductById,
  updateProduct,
  deleteProduct,
} from "../services/productApi";
import { ConfirmModal } from "../components/ConfirmModal";

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
    return <div className="p-8 text-sm text-slate-500">Loading product...</div>;
  }

  if (error || !product) {
    return (
      <div className="p-8">
        <p className="text-sm font-medium text-red-600">
          {error || "Product not found."}
        </p>
        <Link
          to="/products"
          className="mt-4 inline-block text-sm font-semibold text-[#3B76F6] hover:underline"
        >
          ← Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-8 text-[#15284B] dark:bg-slate-950 dark:text-slate-100">
      <div className="mb-6">
        <Link
          to="/products"
          className="text-xs font-semibold text-[#3B76F6] hover:underline"
        >
          ← Back to All Products
        </Link>
        <p className="mt-2 text-xs font-bold tracking-wider text-blue-600 uppercase">
          Catalogue / Product Details
        </p>
      </div>

      <div className="max-w-2xl rounded-2xl border border-slate-200/80 bg-white p-6 shadow-2xs dark:border-slate-800 dark:bg-slate-900">
        {!isEditing ? (
          <>
            <div className="h-56 w-full overflow-hidden rounded-xl bg-[#E8EFFD] dark:bg-slate-800">
              {product.imageUrl && (
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              )}
            </div>

            <div className="mt-5 flex flex-wrap items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-[#15284B] dark:text-white">
                  {product.name}
                </h1>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {product.category} • {product.stockStatus}
                </p>
              </div>
              <p className="text-2xl font-bold text-[#15284B] dark:text-white">
                KSh {Number(product.price).toLocaleString()}
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="rounded-xl bg-[#E8EFFD] px-4 py-2 text-xs font-semibold text-[#3B76F6] hover:bg-blue-100 dark:bg-blue-950 dark:text-blue-400"
              >
                Edit Product
              </button>
              <button
                type="button"
                onClick={() => setIsDeleteModalOpen(true)}
                className="rounded-xl bg-[#FEE2E2]/70 px-4 py-2 text-xs font-semibold text-[#EF4444] hover:bg-red-100 dark:bg-red-950/60 dark:text-red-400"
              >
                Delete Product
              </button>
            </div>
          </>
        ) : (
          <form onSubmit={handleUpdateSubmit} className="space-y-4">
            <h2 className="text-lg font-bold text-[#15284B] dark:text-white">
              Edit Product Details
            </h2>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                Product Image URL
              </label>
              <input
                type="url"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                placeholder="https://example.com/product.jpg"
                className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-800"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                Product Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-800"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-800"
                >
                  <option value="Electronics">Electronics</option>
                  <option value="Audio">Audio</option>
                  <option value="Accessories">Accessories</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Stock Status
                </label>
                <select
                  name="stockStatus"
                  value={formData.stockStatus}
                  onChange={handleChange}
                  className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-800"
                >
                  <option value="In stock">In stock</option>
                  <option value="Low stock">Low stock</option>
                  <option value="Out of stock">Out of stock</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                Price (KSh) *
              </label>
              <input
                type="number"
                name="price"
                min="0"
                required
                value={formData.price}
                onChange={handleChange}
                className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-800"
              />
            </div>

            <div className="flex justify-end gap-2.5 pt-2">
              <button
                type="button"
                disabled={isSaving}
                onClick={() => setIsEditing(false)}
                className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSaving}
                className="rounded-xl bg-[#3B76F6] px-5 py-2 text-xs font-semibold text-white hover:bg-blue-600 disabled:opacity-50"
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
    </div>
  );
}