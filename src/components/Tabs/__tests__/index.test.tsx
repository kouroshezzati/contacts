import { render, fireEvent, screen } from '@testing-library/react';
import Tabs, { Items } from '..';

export const mockedItems: Items = {
  a: [
    {
      id: '12380',
      firstName: 'Adriana',
      lastName: 'Toei',
      phone: '123',
      street: 'green street',
      city: 'racon city',
      state: 'Texas',
      postcode: '112332122',
    },
    {
      id: '90809',
      firstName: 'Joe',
      lastName: 'Doe',
      phone: '874983274',
      street: 'red street',
      city: 'racon city',
      state: 'Texas',
      postcode: '19083221',
    },
  ],
  b: [
    {
      id: '90809',
      firstName: 'Joe',
      lastName: 'Doe',
      phone: '874983274',
      street: 'red street',
      city: 'racon city',
      state: 'Texas',
      postcode: '19083221',
    },
  ],
  c: [],
};

describe('Tab Component', () => {
  it('should have two tabs', () => {
    render(<Tabs items={mockedItems} />);
    expect(screen.getAllByTestId('tab').length).toBe(3);
  });

  it('should have an active class', async () => {
    render(<Tabs items={mockedItems} />);
    const tabB = screen.getAllByTestId('tab')[1];
    expect(tabB).not.toHaveClass('active');
    fireEvent.click(tabB);
    expect(tabB).toHaveClass('active');
  });

  it('should have an disabled class', async () => {
    render(<Tabs items={mockedItems} />);
    const tabs = screen.getAllByTestId('tab');
    expect(tabs[0]).not.toHaveClass('disabled');
    expect(tabs[1]).not.toHaveClass('disabled');
    expect(tabs[2]).toHaveClass('disabled');
  });

  it('first tab should have active class by default', async () => {
    render(<Tabs items={mockedItems} />);
    const tabA = screen.getAllByTestId('tab')[0];
    expect(tabA).toHaveClass('active');
  });
});
