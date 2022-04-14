import { render, fireEvent, screen } from '@testing-library/react';
import Tabs from '..';
import { mockedItems } from '../../../mocks/mockData';

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
