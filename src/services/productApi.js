const BASE_URL = "http://localhost:3000/products";

// 1. GET all products
export async function getProducts() {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

// 2. GET single product by ID
export async function getProductById(id) {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) throw new Error(`Failed to fetch product #${id}`);
  return res.json();
}

// 3. POST create new product
export async function createProduct(productData) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(productData),
  });
  if (!res.ok) throw new Error("Failed to create product");
  return res.json();
}

// 4. PATCH update existing product
export async function updateProduct(id, updatedFields) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedFields),
  });
  if (!res.ok) throw new Error(`Failed to update product #${id}`);
  return res.json();
}

// 5. DELETE product by ID
export async function deleteProduct(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error(`Failed to delete product #${id}`);
  return true;
}