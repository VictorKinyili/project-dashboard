export const ACTIONS = {
  FETCH_START: "FETCH_START",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR: "FETCH_ERROR",
};

export const initialState = {
  products: [],
  loading: false,
  error: null,
};

export function productReducer(state, action) {
  switch (action.type) {
    case ACTIONS.FETCH_START:
      // Ensures the old products are kept on screen while loading
      return { ...state, loading: true, error: null };

    case ACTIONS.FETCH_SUCCESS:
      return { products: action.payload, loading: false, error: null };

    case ACTIONS.FETCH_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}
