import { describe, expect, it } from 'vitest';
import useDebounce from '../../src/Hooks/useDebounce';

describe('useDebounce', () => {
  it('exports the debounce hook', () => expect(useDebounce).toBeTypeOf('function'));
});
