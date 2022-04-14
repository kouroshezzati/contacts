import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Tabs from './components/Tabs';
import { groupByAlphabet, IContact, Items, ROOT_URL } from './utils';

const Container = styled.div`
  padding: 1rem;
`;

interface IUser {
  gender: string;
  name: { first: string; last: string; title: string };
  location: {
    street: { number: number; name: string };
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: object;
    timezone: object;
  };
  email: string;
  login: object;
  dob: object;
  registered: object;
  phone: string;
  cell: string;
  id: { name: string; value: string };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

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
        let contacts: IContact[] = results.map(
          ({
            id: { value },
            name: { first, last },
            location: { street, city, state, postcode },
            picture: { thumbnail },
            phone,
          }: IUser): IContact => ({
            id: value,
            firstName: first,
            lastName: last,
            phone,
            street: `${street.name} ${street.number}`,
            city,
            state,
            postcode,
            picture: thumbnail,
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
