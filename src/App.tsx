import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Contact, ContactResponse, Items } from './components/Contacts/Contact';
import ContactList from './components/Contacts/ContactList';
import ContactModal from './components/Contacts/ContactModal';
import ContactTabs from './components/Contacts/ContactTabs';
import { groupByAlphabet, ROOT_URL } from './utils/utils';

const Container = styled.div`
  padding: 1rem;
`;

function App() {
  const [items, setItems] = useState<Items>();
  const [selectedContact, setSelectedContact] = useState<Contact>();
  const [title, setTitle] = useState<string>('a');
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(`${ROOT_URL}?results=150&nat=US`);
        if (!response.ok) {
          console.log(`Request failed with status code ${response.status}.`);
          return;
        }
        const { results } = await response.json();
        if (!results) {
          console.log('There is no record for contacts.');
          return;
        }
        let contacts: Contact[] = results.map(
          ({
            id: { value },
            name: { first, last },
            email,
            location: { street, city, state, postcode },
            picture: { medium },
            phone,
            login,
          }: ContactResponse): Contact => ({
            id: value,
            firstName: first,
            lastName: last,
            email,
            phone,
            street: `${street.name} ${street.number}`,
            city,
            state,
            postcode,
            picture: medium,
            username: login.username,
          })
        );
        setItems(groupByAlphabet(contacts));
      } catch (e) {
        console.log('Error:', e);
      }
    })();
  }, []);

  const handleOnContactClick = (contact: Contact) => {
    setSelectedContact(contact);
    setIsOpen(true);
  };
  return (
    <Container>
      {items && (
        <ContactTabs items={items} onTabClick={setTitle} currentTab={title}>
          <ContactList
            contacts={items[title]}
            key={title}
            onContactClick={handleOnContactClick}
          />
        </ContactTabs>
      )}
      {selectedContact && isOpen && (
        <ContactModal {...selectedContact} setIsOpen={setIsOpen} />
      )}
    </Container>
  );
}

export default App;
