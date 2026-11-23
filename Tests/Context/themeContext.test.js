import { describe, expect, it } from 'vitest';
import { ThemeContext } from '../../src/Context/themeContext';

describe('themeContext', () => {
  it('exports a React context', () => expect(ThemeContext).toBeTruthy());
});
