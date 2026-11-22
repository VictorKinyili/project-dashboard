import { createContext, useContext, useReducer, useMemo, useCallback,} from "react";
import { productReducer, initialState, ACTIONS } from "./productReducer";

// initialState is the starting data, and ACTIONS lists the action types
const ProductContext = createContext(null);

export function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const fetchStart = useCallback(
    () => dispatch({ type: ACTIONS.FETCH_START }), // dispatch = sends actions to the reducer to update that data
    []
  );
  const fetchSuccess = useCallback( // useCallback keeps the same function between renders
    (products) => dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: products }),
    []
  )
  const fetchError = useCallback(
    (message) => dispatch({ type: ACTIONS.FETCH_ERROR, payload: message }),
    []
  );

  const value = useMemo(
    () => ({ ...state, fetchStart, fetchSuccess, fetchError }),
    [state, fetchStart, fetchSuccess, fetchError]
  );
  // useMemo rebuilds this object when the state changes avoiding unnecessary re-renders in components that use it

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
} // the value is available to every component inside the provider

export function useProducts() {
  const context = useContext(ProductContext);
  if (context === null) {
    throw new Error("useProducts must be used inside a <ProductProvider>");
  }
  return context;
}