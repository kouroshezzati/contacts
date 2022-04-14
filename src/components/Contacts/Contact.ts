interface KeyValueObject {
  [key: string]: string;
}

export interface ContactResponse {
  gender: string;
  name: { first: string; last: string; title: string };
  location: {
    street: { number: number; name: string };
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: KeyValueObject;
    timezone: KeyValueObject;
  };
  email: string;
  login: KeyValueObject;
  dob: KeyValueObject;
  registered: KeyValueObject;
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

export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  postcode: number;
  picture: string;
  username: string;
}

export interface Items {
  [key: string]: Contact[];
}
