import { describe, expect, it } from 'vitest';
import { validateProduct } from '../../src/utils/validateProduct';

describe('validateProduct', () => {
  it('accepts a valid product', () => {
    expect(validateProduct({
      name: 'Laptop',
      category: 'Electronics',
      price: '100',
      stockStatus: 'In stock',
    })).toEqual({});
  });

  it('reports required fields', () => {
    expect(validateProduct({
      name: '',
      category: '',
      price: '',
      stockStatus: '',
    })).toHaveProperty('name');
  });
});
