import { describe, expect, it } from 'vitest';
import ProductDetailPage from '../../src/pages/ProductDetailPage';

describe('ProductDetailPage', () => {
  it('exports a page component', () => expect(ProductDetailPage).toBeTypeOf('function'));
});
