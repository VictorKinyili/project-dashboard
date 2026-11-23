import '@testing-library/jest-dom/vitest';
import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import App from '../src/App';

beforeEach(() => {
  vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
    ok: true,
    json: vi.fn().mockResolvedValue([]),
  }));
});

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

describe('App', () => {
  it('renders the dashboard', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: 'Dashboard' })).toBeInTheDocument();
  });
});
