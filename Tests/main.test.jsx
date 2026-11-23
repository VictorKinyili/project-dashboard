import { describe, expect, it, vi } from 'vitest';

const reactDomMock = vi.hoisted(() => ({
  render: vi.fn(),
  createRoot: vi.fn(),
}));

vi.mock('react-dom/client', () => ({
  createRoot: reactDomMock.createRoot.mockReturnValue({ render: reactDomMock.render }),
}));

describe('main', () => {
  it('creates the React root', async () => {
    await import('../src/main');
    expect(reactDomMock.createRoot).toHaveBeenCalled();
    expect(reactDomMock.render).toHaveBeenCalled();
  });
});
