import { describe, expect, it } from 'vitest';
import { useTheme } from '../../src/Context/useTheme';

describe('useTheme', () => {
  it('exports the theme hook', () => expect(useTheme).toBeTypeOf('function'));
});
