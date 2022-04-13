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
  postcode: string;
}
