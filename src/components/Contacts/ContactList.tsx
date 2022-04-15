import styled from 'styled-components';
import { Contact } from './Contact';

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 2rem;
  row-gap: 5px;
  .contact-row {
    padding: 1px 10px 9px;
    border-bottom: 1px dotted darkgray;
    cursor: pointer;
    font-weight: 700;
  }
`;

export default function ContactList({
  contacts,
  onContactClick,
}: {
  contacts: Contact[];
  onContactClick: (contact: Contact) => void;
}) {
  if (contacts.length === 0) {
    return null;
  }
  return (
    <>
      <Container>
        {contacts.map((contact, index) => (
          <ContactRow key={index} contact={contact} onClick={onContactClick} />
        ))}
      </Container>
    </>
  );
}

function ContactRow({
  contact,
  onClick,
}: {
  contact: Contact;
  onClick: (contact: Contact) => void;
}) {
  const { firstName, lastName } = contact;
  return (
    <div
      className='contact-row'
      data-testid='contact-row'
      onClick={() => onClick(contact)}
    >{`${firstName}, ${lastName.toUpperCase()}`}</div>
  );
}
