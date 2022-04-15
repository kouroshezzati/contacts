import { render, screen } from '@testing-library/react';
import ContactTabs from '../ContactTabs';
import { mockedItems } from '../../../mocks/mockData';

describe('Tab Component', () => {
  test('should have two tabs', () => {
    render(
      <ContactTabs onTabClick={jest.fn} currentTab='a' items={mockedItems}>
        <div />
      </ContactTabs>
    );
    expect(screen.getAllByTestId('tab').length).toBe(3);
  });

  test('should have an disabled class', async () => {
    render(
      <ContactTabs onTabClick={jest.fn} currentTab='a' items={mockedItems}>
        <div />
      </ContactTabs>
    );
    const tabs = screen.getAllByTestId('tab');
    expect(tabs[0]).not.toHaveClass('disabled');
    expect(tabs[1]).not.toHaveClass('disabled');
    expect(tabs[2]).toHaveClass('disabled');
  });

  test('first tab should have active class by default', async () => {
    render(
      <ContactTabs onTabClick={jest.fn} currentTab='a' items={mockedItems}>
        <div />
      </ContactTabs>
    );
    const tabA = screen.getAllByTestId('tab')[0];
    expect(tabA).toHaveClass('active');
  });
});
