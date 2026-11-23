import database from "../db.json" with { type: "json" };

export default function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    res.status(405).json({
      error: "The deployed catalogue is read-only. Use a persistent backend to save product changes.",
    });
    return;
  }

  if (req.query.resource !== "products") {
    res.status(404).json({ error: "Resource not found." });
    return;
  }

  const { id } = req.query;
  if (id !== undefined) {
    const product = database.products.find((item) => String(item.id) === String(id));
    if (!product) {
      res.status(404).json({ error: "Product not found." });
      return;
    }
    res.status(200).json(product);
    return;
  }

  res.status(200).json(database.products);
}
