import { describe, expect, it } from 'vitest';
import Team from '../../src/Components/Team';

describe('Team', () => {
  it('exports a component', () => expect(Team).toBeTypeOf('function'));
});
