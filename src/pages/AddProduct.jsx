import { useState, useId } from "react";
import { useNavigate, Link } from "react-router-dom";
import { validateProduct } from "../utils/validateProduct";
import { createProduct } from "../services/productApi";

export default function AddProduct() {
  const navigate = useNavigate();
  const baseId = useId();

  const [formData, setFormData] = useState({
    name: "",
    category: "Electronics",
    price: "",
    stock: "In stock",
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
      await createProduct({
        name: formData.name.trim(),
        category: formData.category.trim(),
        price: Number(formData.price),
        stock: formData.stock,
      });
      navigate("/products");
    } catch (err) {
      setSubmitError("Could not save product. Make sure JSON Server is running on port 3001.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-2xl p-6">
      <Link to="/products" className="text-xs font-medium text-blue-600 hover:underline">
        &larr; Back to Products
      </Link>

      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <span className="text-xs font-semibold uppercase text-blue-600">Catalogue</span>
        <h1 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">Add New Product</h1>
        <p className="text-sm text-slate-500">Create a new product entry for the K-TECH store.</p>

        {submitError && (
          <div className="mt-4 rounded-lg bg-red-50 p-3 text-xs font-medium text-red-600">
            {submitError}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
          {/* Product Name */}
          <div>
            <label htmlFor={`${baseId}-name`} className="block text-xs font-medium text-slate-700 dark:text-slate-300">
              Product Name
            </label>
            <input
              id={`${baseId}-name`}
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g., Wireless Mouse"
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-500 dark:border-slate-600 dark:bg-slate-700"
            />
            {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
          </div>

          {/* Category */}
          <div>
            <label htmlFor={`${baseId}-category`} className="block text-xs font-medium text-slate-700 dark:text-slate-300">
              Category
            </label>
            <select
              id={`${baseId}-category`}
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-500 dark:border-slate-600 dark:bg-slate-700"
            >
              <option value="Electronics">Electronics</option>
              <option value="Audio">Audio</option>
              <option value="Accessories">Accessories</option>
            </select>
            {errors.category && <p className="mt-1 text-xs text-red-600">{errors.category}</p>}
          </div>

          {/* Price */}
          <div>
            <label htmlFor={`${baseId}-price`} className="block text-xs font-medium text-slate-700 dark:text-slate-300">
              Price (KSh)
            </label>
            <input
              id={`${baseId}-price`}
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              placeholder="e.g., 3500"
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-500 dark:border-slate-600 dark:bg-slate-700"
            />
            {errors.price && <p className="mt-1 text-xs text-red-600">{errors.price}</p>}
          </div>

          {/* Stock Status */}
          <div>
            <label htmlFor={`${baseId}-stock`} className="block text-xs font-medium text-slate-700 dark:text-slate-300">
              Stock Status
            </label>
            <select
              id={`${baseId}-stock`}
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-500 dark:border-slate-600 dark:bg-slate-700"
            >
              <option value="In stock">In stock</option>
              <option value="Low stock">Low stock</option>
              <option value="Out of stock">Out of stock</option>
            </select>
            {errors.stock && <p className="mt-1 text-xs text-red-600">{errors.stock}</p>}
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <Link
              to="/products"
              className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-200"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={submitting}
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
            >
              {submitting ? "Saving..." : "Create Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}