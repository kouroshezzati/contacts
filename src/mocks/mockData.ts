import { Items } from '../components/Contacts/Contact';

export const mockedContactsResponse = {
  results: [
    {
      gender: 'female',
      name: {
        title: 'Mrs',
        first: 'Olivia',
        last: 'Ambrose',
      },
      location: {
        street: {
          number: 6283,
          name: 'West Ave',
        },
        city: 'Delisle',
        state: 'New Brunswick',
        country: 'Canada',
        postcode: 'F9G 8K2',
        coordinates: {
          latitude: '-58.4256',
          longitude: '30.9097',
        },
        timezone: {
          offset: '-3:00',
          description: 'Brazil, Buenos Aires, Georgetown',
        },
      },
      email: 'olivia.ambrose@example.com',
      login: {
        uuid: 'd0a5af44-0fb0-487e-98db-2f1b43cd5e03',
        username: 'redcat971',
        password: 'speed',
        salt: '8RcGB5fH',
        md5: '67e7f42f8ea02871ba0f2e8cffd57ada',
        sha1: '6acf4338be0d264fec134f5101cb3cb57fa33088',
        sha256:
          'dd4e0cbc6b5baeac835182119ba418432605c97ba5f70312172d446ea5986df6',
      },
      dob: {
        date: '1950-08-18T07:53:23.457Z',
        age: 72,
      },
      registered: {
        date: '2014-09-30T05:42:24.149Z',
        age: 8,
      },
      phone: '178-380-2067',
      cell: '203-445-4206',
      id: {
        name: '',
        value: null,
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/24.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/24.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/24.jpg',
      },
      nat: 'CA',
    },
    {
      gender: 'male',
      name: {
        title: 'Mr',
        first: 'Veeti',
        last: 'Hautala',
      },
      location: {
        street: {
          number: 3396,
          name: 'Reijolankatu',
        },
        city: 'Pyhtää',
        state: 'Satakunta',
        country: 'Finland',
        postcode: 53849,
        coordinates: {
          latitude: '-86.0562',
          longitude: '64.2866',
        },
        timezone: {
          offset: '-4:00',
          description: 'Atlantic Time (Canada), Caracas, La Paz',
        },
      },
      email: 'veeti.hautala@example.com',
      login: {
        uuid: 'b4166786-30a3-4f3e-a460-e245aaa7d3c3',
        username: 'silverpanda974',
        password: 'armani',
        salt: 'YoVmFZYR',
        md5: '7a6f8d0d03587f242aa12ece86fd556d',
        sha1: '651fd1fd533dc6d0720dac728eba217b6002c80d',
        sha256:
          '4fcd4974a205e403deb838d32312d23d13ea428b55f4a8e5ca0e02e8ab6789c8',
      },
      dob: {
        date: '1998-09-04T07:52:34.889Z',
        age: 24,
      },
      registered: {
        date: '2007-05-18T20:45:05.229Z',
        age: 15,
      },
      phone: '03-753-961',
      cell: '041-014-43-58',
      id: {
        name: 'HETU',
        value: 'NaNNA263undefined',
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/20.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/20.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/20.jpg',
      },
      nat: 'FI',
    },
    {
      gender: 'female',
      name: {
        title: 'Miss',
        first: 'Clare',
        last: 'Orie',
      },
      location: {
        street: {
          number: 6141,
          name: 'Burgemeester Diepenhorstlaan',
        },
        city: 'Abbekerk',
        state: 'Groningen',
        country: 'Netherlands',
        postcode: 55859,
        coordinates: {
          latitude: '1.3702',
          longitude: '120.5393',
        },
        timezone: {
          offset: '+9:00',
          description: 'Tokyo, Seoul, Osaka, Sapporo, Yakutsk',
        },
      },
      email: 'clare.orie@example.com',
      login: {
        uuid: 'db1cbff4-32b8-45fa-b212-7758e395bc28',
        username: 'bigbear871',
        password: 'suicide',
        salt: 'ys2FJUQ3',
        md5: '39c80dfb7c0c0113fb943d55b52e0b43',
        sha1: '71a32aa3d7db0ab37e38829d9e8591825820d213',
        sha256:
          'fe4b8b5fdbb99ac333307c6bc6b93b5172d64f23ae4cfbf51be99fc08f455644',
      },
      dob: {
        date: '1996-10-04T22:51:07.149Z',
        age: 26,
      },
      registered: {
        date: '2014-02-01T07:38:17.778Z',
        age: 8,
      },
      phone: '(655)-302-2540',
      cell: '(321)-183-6329',
      id: {
        name: 'BSN',
        value: '85116271',
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/8.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/8.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/8.jpg',
      },
      nat: 'NL',
    },
  ],
  info: {
    seed: 'e1a5afa83ea74e2f',
    results: 3,
    page: 1,
    version: '1.3',
  },
};

export const mockedItems: Items = {
  a: [
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
  ],
  b: [
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
  ],
  c: [],
};
