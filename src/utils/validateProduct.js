export function validateProduct(values) {
  const errors = {};

  if (!values.name || !values.name.trim()) {
    errors.name = "Product name is required.";
  } else if (values.name.trim().length < 2) {
    errors.name = "Product name must be at least 2 characters.";
  }

  if (!values.category || !values.category.trim()) {
    errors.category = "Please select or enter a category.";
  }

  if (values.price === "" || values.price === null || values.price === undefined) {
    errors.price = "Price is required.";
  } else if (Number.isNaN(Number(values.price)) || Number(values.price) <= 0) {
    errors.price = "Price must be greater than 0.";
  }

  if (!values.stockStatus || !values.stockStatus.trim()) {
    errors.stockStatus = "Stock status is required.";
  }

  return errors;
}