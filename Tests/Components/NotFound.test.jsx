import { describe, expect, it } from 'vitest';
import NotFound from '../../src/Components/NotFound';

describe('NotFound', () => {
  it('exports a component', () => expect(NotFound).toBeTypeOf('function'));
});
