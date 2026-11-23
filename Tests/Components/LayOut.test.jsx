import { describe, expect, it } from 'vitest';
import Layout from '../../src/Components/LayOut';

describe('LayOut', () => {
  it('exports a layout component', () => expect(Layout).toBeTypeOf('function'));
});
