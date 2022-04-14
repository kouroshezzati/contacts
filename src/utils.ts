export interface Items {
  [key: string]: IContact[];
}

export function cb(...args: any[]) {
  return args.filter(Boolean).join(' ');
}

export interface IContact {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  postcode: number;
  picture: string;
}

export function groupByAlphabet(contacts: IContact[]): Items {
  let _items: Items = {};
  'abcdefghijklmnopqrstuvwxyz'.split('').forEach((alphabet: string) => {
    _items[alphabet] = [];
  });
  for (let i = 0; i < contacts.length; ++i) {
    const _contact = contacts[i];
    const key = _contact.firstName.charAt(0).toLocaleLowerCase();
    _items[key].push(_contact);
  }
  return _items;
}

export const ROOT_URL = 'https://randomuser.me/api/';
