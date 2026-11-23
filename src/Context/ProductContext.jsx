import { useCallback, useEffect, useMemo, useReducer } from "react";
import { productReducer, initialState, ACTIONS } from "./productReducer";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../services/productApi";
import { ProductContext } from "./productContext";

export function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const refreshProducts = useCallback(async () => {
    dispatch({ type: ACTIONS.FETCH_START });
    try {
      const products = await getProducts();
      dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: products });
      return true;
    } catch (error) {
      dispatch({ type: ACTIONS.FETCH_ERROR, payload: error.message });
      return false;
    }
  }, []);

  useEffect(() => {
    refreshProducts();
  }, [refreshProducts]);

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
    () => ({ ...state, addProduct, editProduct, removeProduct, refreshProducts }),
    [state, addProduct, editProduct, removeProduct, refreshProducts],
  );

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}
