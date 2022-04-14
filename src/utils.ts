import { Contact, Items } from './components/Contacts/Contact';

export function cb(...args: any[]) {
  return args.filter(Boolean).join(' ');
}

export function groupByAlphabet(contacts: Contact[]): Items  {
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
