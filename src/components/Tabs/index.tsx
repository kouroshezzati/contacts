import { useState } from 'react';
import styled from 'styled-components';
import { IContact } from '../../utils';
import { cb } from '../../utils';

const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .tab {
    background-color: inherit;
    float: left;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0px 4px;
    transition: 0.3s;
    font-size: 1.2rem;
    font-weight: 700;
    border-top-left-radius: 9px;
    border-top-right-radius: 9px;
    border: 1px solid #c6c6c6;
    border-bottom: unset;
    background-color: #f1f1f1;
    sub {
      font-size: 0.6rem;
      font-weight: 400;
    }
    span {
      padding: 0 2px 0 9px;
    }
  }

  .tab {
    &:hover:not(.disabled) {
      background-color: #ddd;
    }

    &.active {
      background-image: linear-gradient(#c0c0c0 10%, transparent 40%);
    }

    &.disabled {
      opacity: 0.4;
    }
  }

  .content-container {
    padding: 6px 12px;
    border: 1px solid #ccc;
    border-top: none;
    background-color: #f1f1f1;
  }
`;

export interface Items {
  [key: string]: IContact[];
}

export default function Tabs({ items }: { items: Items }) {
  const keys = Object.keys(items);
  const [title, setTitle] = useState<string>(keys[0]);
  return (
    <Container>
      <div className='tabs'>
        {keys.map((item, index) => (
          <Tab
            key={item}
            title={item}
            active={keys.indexOf(title) === index}
            number={items[item].length}
            onClick={(title: string) => setTitle(title)}
          />
        ))}
      </div>
      <div className='content-container'>
        {items[title].map((entity) => (
          <Contact
            firstName={entity.firstName}
            lastName={entity.lastName}
            key={title + entity.id}
          />
        ))}
      </div>
    </Container>
  );
}

function Contact({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}) {
  return <ContactRow firstName={firstName} lastName={lastName} />;
}

function ContactRow({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}) {
  return (
    <div>
      <span>{firstName}</span> <span>{lastName}</span>
    </div>
  );
}

function Tab({
  title,
  number,
  active,
  onClick,
}: {
  title: string;
  number: number;
  active: boolean;
  onClick: (title: string) => void;
}) {
  const disabled: boolean = number < 1;
  return (
    <div
      data-testid='tab'
      className={cb('tab', active && 'active', disabled && 'disabled')}
      onClick={() => !disabled && onClick(title)}
    >
      <span>{title}</span> <sub>{number}</sub>
    </div>
  );
}
