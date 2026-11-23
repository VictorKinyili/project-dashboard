import { describe, expect, it } from 'vitest';
import Products from '../../src/pages/Products';

describe('Products', () => {
  it('exports a page component', () => expect(Products).toBeTypeOf('function'));
});
