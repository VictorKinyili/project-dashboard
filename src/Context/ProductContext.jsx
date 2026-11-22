import { useCallback, useEffect, useMemo, useReducer } from "react";
import { productReducer, initialState, ACTIONS } from "./productReducer";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../services/productApi";
import { ProductContext } from "./productContext";

export function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(productReducer, initialState);

  useEffect(() => {
    dispatch({ type: ACTIONS.FETCH_START });
    getProducts()
      .then((products) => dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: products }))
      .catch((error) => dispatch({ type: ACTIONS.FETCH_ERROR, payload: error.message }));
  }, []);

  const addProduct = useCallback(async (product) => {
    const created = await createProduct(product);
    dispatch({ type: ACTIONS.ADD_PRODUCT, payload: created });
    return created;
  }, []);

  const editProduct = useCallback(async (id, fields) => {
    const updated = await updateProduct(id, fields);
    dispatch({ type: ACTIONS.UPDATE_PRODUCT, payload: updated });
    return updated;
  }, []);

  const removeProduct = useCallback(async (id) => {
    await deleteProduct(id);
    dispatch({ type: ACTIONS.DELETE_PRODUCT, payload: id });
  }, []);

  const value = useMemo(
    () => ({ ...state, addProduct, editProduct, removeProduct }),
    [state, addProduct, editProduct, removeProduct],
  );

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}
