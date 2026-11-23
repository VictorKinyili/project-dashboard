import { describe, expect, it } from 'vitest';
import { ProductContext } from '../../src/Context/productContext';

describe('productContext', () => {
  it('exports a React context', () => expect(ProductContext).toBeTruthy());
});
