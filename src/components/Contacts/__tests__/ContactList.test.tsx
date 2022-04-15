import { render, screen } from '@testing-library/react';
import { Contact } from '../Contact';
import ContactList from '../ContactList';
const contacts: Contact[] = [
  {
    id: '12380',
    firstName: 'Adriana',
    lastName: 'Toei',
    email: '',
    phone: '123',
    street: 'green street',
    city: 'racon city',
    state: 'Texas',
    postcode: 112332122,
    picture: '',
    username: '',
  },
  {
    id: '90809',
    firstName: 'Joe',
    lastName: 'Doe',
    email: '',
    phone: '874983274',
    street: 'red street',
    city: 'racon city',
    state: 'Texas',
    postcode: 19083221,
    picture: '',
    username: '',
  },
  {
    id: '34380',
    firstName: 'Emma',
    lastName: 'Stone',
    email: '',
    phone: '123',
    street: 'green street',
    city: 'racon city',
    state: 'Texas',
    postcode: 112332122,
    picture: '',
    username: '',
  },
  {
    id: '93422',
    firstName: 'Andy',
    lastName: 'william',
    email: '',
    phone: '874983274',
    street: 'red street',
    city: 'racon city',
    state: 'Texas',
    postcode: 19083221,
    picture: '',
    username: '',
  },
];

describe('ContactList tests', () => {
  it('should have four contact rows', () => {
    render(<ContactList onContactClick={jest.fn} contacts={contacts} />);
    expect(screen.getAllByTestId('contact-row').length).toBe(4);
  });

  it('should show first name in lower case and last name upper case', () => {
    const contact = contacts[0];
    render(<ContactList onContactClick={jest.fn} contacts={contacts} />);
    expect(
      screen.getAllByText(
        `${contact.firstName}, ${contact.lastName.toUpperCase()}`
      ).length
    ).toBe(1);
  });
});
