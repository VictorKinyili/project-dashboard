import { describe, expect, it } from 'vitest';
import AddProduct from '../../src/pages/AddProduct';

describe('AddProduct', () => {
  it('exports a page component', () => expect(AddProduct).toBeTypeOf('function'));
});
