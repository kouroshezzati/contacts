import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Contact, ContactResponse, Items } from './components/Contacts/Contact';
import Tabs from './components/Tabs';
import { groupByAlphabet, ROOT_URL } from './utils';

const Container = styled.div`
  padding: 1rem;
`;

function App() {
  const [items, setItems] = useState<Items>();

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(`${ROOT_URL}?results=150&nat=US`);
        if (!response.ok) {
          throw new Error(`Request faild with status code ${response.status}`);
        }
        const { results } = await response.json();
        if (!results) {
          return;
        }
        let contacts: Contact[] = results.map(
          ({
            id: { value },
            name: { first, last },
            location: { street, city, state, postcode },
            picture: { thumbnail },
            phone,
            login,
          }: ContactResponse): Contact => ({
            id: value,
            firstName: first,
            lastName: last,
            phone,
            street: `${street.name} ${street.number}`,
            city,
            state,
            postcode,
            picture: thumbnail,
            username: login.username,
          })
        );
        setItems(groupByAlphabet(contacts));
      } catch (e) {
        console.log('Error:', e);
      }
    })();
  }, []);
  return <Container>{items && <Tabs items={items} />}</Container>;
}

export default App;
