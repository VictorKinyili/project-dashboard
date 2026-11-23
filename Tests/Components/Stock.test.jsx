import { describe, expect, it } from 'vitest';
import Stock from '../../src/Components/Stock';

describe('Stock', () => {
  it('exports a component', () => expect(Stock).toBeTypeOf('function'));
});
