import { describe, expect, it } from 'vitest';
import About from '../../src/Components/About';

describe('About', () => {
  it('exports a component', () => expect(About).toBeTypeOf('function'));
});
