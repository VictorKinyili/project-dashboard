import { describe, expect, it } from 'vitest';
import { ThemeProvider } from '../../src/Context/ThemeContext';

describe('ThemeContext', () => {
  it('exports the theme provider', () => expect(ThemeProvider).toBeTypeOf('function'));
});
