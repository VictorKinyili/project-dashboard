import '@testing-library/jest-dom/vitest';
import React from 'react';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import AddProduct from '../../src/pages/AddProduct';

const { addProduct } = vi.hoisted(() => ({
  addProduct: vi.fn(),
}));

vi.mock('../../src/Context/useProducts', () => ({
  useProducts: () => ({ addProduct }),
}));

describe('AddProduct', () => {
  afterEach(cleanup);

  beforeEach(() => {
    addProduct.mockReset();
    addProduct.mockResolvedValue({ id: 'new-product' });
  });

  function renderAddProduct() {
    return render(
      <MemoryRouter>
        <AddProduct />
      </MemoryRouter>,
    );
  }

  it('creates a product with valid form data', async () => {
    renderAddProduct();

    fireEvent.change(screen.getByLabelText('Product Name'), {
      target: { value: 'Wireless Mouse' },
    });
    fireEvent.change(screen.getByLabelText('Price (KSh)'), {
      target: { value: '3500' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Create Product' }));

    await waitFor(() => {
      expect(addProduct).toHaveBeenCalledWith({
        name: 'Wireless Mouse',
        category: 'Electronics',
        price: 3500,
        stockStatus: 'In stock',
      });
    });
  });

  it('shows validation errors and does not create an invalid product', () => {
    renderAddProduct();

    fireEvent.click(screen.getByRole('button', { name: 'Create Product' }));

    expect(screen.getByText('Product name is required.')).toBeInTheDocument();
    expect(screen.getByText('Price is required.')).toBeInTheDocument();
    expect(addProduct).not.toHaveBeenCalled();
  });
});
