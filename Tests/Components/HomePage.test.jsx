import { describe, expect, it } from 'vitest';
import HomePage from '../../src/Components/HomePage';

describe('HomePage', () => {
  it('exports a component', () => expect(HomePage).toBeTypeOf('function'));
});
