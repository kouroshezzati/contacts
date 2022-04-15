import styled from 'styled-components';
import { cb } from '../../utils/utils';
import { Items } from './Contact';

const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .tab {
    float: left;
    outline: none;
    cursor: pointer;
    padding: 0 4px;
    transition: 0.3s;
    font-size: 1.2rem;
    font-weight: 700;
    border-top-left-radius: 9px;
    border-top-right-radius: 9px;
    border: 1px solid #c6c6c6;
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
      border-bottom: 1px solid var(--background-color);
    }

    &.disabled {
      opacity: 0.4;
    }
  }

  .content-container {
    padding: 1.5rem;
    border: 1px solid #ccc;
    border-top: none;
    background-color: #f1f1f1;
  }
`;

export default function ContactTabs({
  items,
  currentTab,
  onTabClick,
  children,
}: {
  items: Items;
  currentTab: string;
  onTabClick: (title: string) => void;
  children: React.ReactNode;
}) {
  const keys = Object.keys(items);
  return (
    <Container>
      <div className='tabs'>
        {keys.map((item, index) => (
          <Tab
            key={item}
            title={item}
            active={keys.indexOf(currentTab) === index}
            number={items[item].length}
            onClick={(title: string) => onTabClick(title)}
          />
        ))}
      </div>
      <div className='content-container'>{children}</div>
    </Container>
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
