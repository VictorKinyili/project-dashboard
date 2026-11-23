import { afterEach, describe, expect, it, vi } from 'vitest';
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../../src/services/productApi';

afterEach(() => vi.unstubAllGlobals());

describe('productApi', () => {
  it('fetches products', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue([{ id: 1 }]),
    }));
    await expect(getProducts()).resolves.toEqual([{ id: 1 }]);
  });

  it('creates, updates, and deletes products', async () => {
    vi.stubGlobal('fetch', vi.fn()
      .mockResolvedValueOnce({ ok: true, json: vi.fn().mockResolvedValue({ id: 1 }) })
      .mockResolvedValueOnce({ ok: true, json: vi.fn().mockResolvedValue({ id: 1, name: 'Updated' }) })
      .mockResolvedValueOnce({ ok: true }));

    await expect(createProduct({ name: 'New' })).resolves.toEqual({ id: 1 });
    await expect(updateProduct(1, { name: 'Updated' })).resolves.toEqual({ id: 1, name: 'Updated' });
    await expect(deleteProduct(1)).resolves.toBe(true);
  });

  it('fetches one product', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue({ id: 7 }),
    }));
    await expect(getProductById(7)).resolves.toEqual({ id: 7 });
  });
});
