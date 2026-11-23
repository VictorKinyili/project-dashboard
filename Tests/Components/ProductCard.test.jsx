import { describe, expect, it } from 'vitest';
import ProductCard from '../../src/Components/ProductCard';

describe('ProductCard', () => {
  it('exports a component', () => expect(ProductCard).toBeTypeOf('function'));
});
