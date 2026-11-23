import { describe, expect, it } from 'vitest';
import { ACTIONS, initialState, productReducer } from '../../src/Context/productReducer';

describe('productReducer', () => {
  it('adds and deletes products', () => {
    const added = productReducer(initialState, {
      type: ACTIONS.ADD_PRODUCT,
      payload: { id: 1, name: 'Laptop' },
    });
    expect(added.products).toHaveLength(1);

    const deleted = productReducer(added, {
      type: ACTIONS.DELETE_PRODUCT,
      payload: 1,
    });
    expect(deleted.products).toEqual([]);
  });

  it('rejects unknown actions', () => {
    expect(() => productReducer(initialState, { type: 'UNKNOWN' })).toThrow();
  });
});
