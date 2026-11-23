import { describe, expect, it } from 'vitest';
import { useProducts } from '../../src/Context/useProducts';

describe('useProducts', () => {
  it('exports the products hook', () => expect(useProducts).toBeTypeOf('function'));
});
