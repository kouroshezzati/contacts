import styled from 'styled-components';
import { IContact } from '../../utils';

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 2rem;
  row-gap: 5px;
  .contact-row {
    padding: 1px 10px 9px;
    border-bottom: 1px dotted darkgray;
    cursor: pointer;
  }
`;

export default function ContactList({ contacts }: { contacts: IContact[] }) {
  if (contacts.length === 0) {
    return null;
  }
  return (
    <Container>
      {contacts.map(({ firstName, lastName }, index) => (
        <ContactRow key={index} firstName={firstName} lastName={lastName} />
      ))}
    </Container>
  );
}

function ContactRow({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}) {
  return (
    <div
      className='contact-row'
      data-testid='contact-row'
    >{`${firstName.toLowerCase()}, ${lastName.toUpperCase()}`}</div>
  );
}
