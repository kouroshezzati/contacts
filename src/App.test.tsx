import { fireEvent, render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from './App';
import { mockedContactsResponse } from './mocks/mockData';
import { ROOT_URL } from './utils/utils';

const server = setupServer(
  rest.get(ROOT_URL, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockedContactsResponse));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('App test', () => {
  test('renders learn react link', async () => {
    render(<App />);
    const tabs = await screen.findAllByTestId('tab');
    expect(tabs.length).toBe(26);
  });

  it('should have an active class after click on H tab', async () => {
    render(<App />);
    const tabs = await screen.findAllByTestId('tab');
    const tabH = tabs[7];
    expect(tabH).not.toHaveClass('active');
    fireEvent.click(tabH);
    expect(tabH).toHaveClass('active');
  });
});
