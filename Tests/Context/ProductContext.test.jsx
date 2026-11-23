import { describe, expect, it } from 'vitest';
import { ProductProvider } from '../../src/Context/ProductContext';

describe('ProductContext', () => {
  it('exports the product provider', () => expect(ProductProvider).toBeTypeOf('function'));
});
