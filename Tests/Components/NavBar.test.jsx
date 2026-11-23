import { describe, expect, it } from 'vitest';
import Navbar from '../../src/Components/NavBar';

describe('NavBar', () => {
  it('exports a component', () => expect(Navbar).toBeTypeOf('function'));
});
