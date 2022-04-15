import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Contact } from './Contact';

const Container = styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  pointer-events: none;

  #modal {
    border: 1px solid var(--border-color);
    background: linear-gradient(
      rgba(200, 200, 200, 1) 0%,
      rgba(237, 237, 237, 1) 5%,
      rgba(237, 237, 237, 1) 95%,
      rgba(200, 200, 200, 1) 100%
    );
    border-radius: 3px;
    box-shadow: 0 1px 3px var(--border-color);
    margin: auto;
    width: fit-content;
    padding: 0.4rem 0.4rem 0;
    position: relative;
    z-index: 10;
    pointer-events: all;

    #username {
      display: inline-block;
      padding: 0.3rem 0.4rem;
      background-color: #ff3d00;
      box-shadow: 2px 0 3px grey;
      font-size: 0.8rem;
      font-weight: 500;
      color: white;
      white-space: nowrap;
      writing-mode: vertical-rl;
      text-orientation: mixed;
      margin: -10px 0 0 -8px;
    }
    .details {
      display: flex;
      gap: 1rem;
      .picture {
        min-width: 72px;
        img {
          border-radius: 50%;
        }
      }
      .user-information {
        margin-bottom: 2.5rem;
        margin-right: 1rem;
        .fullname {
          margin-bottom: 1rem;
          font-size: 1.4rem;
          opacity: 0.5;
        }
        .grid {
          display: grid;
          grid-template-columns: auto auto;
          column-gap: 0.5rem;
        }
      }
      > div:first-child {
        cursor: pointer;
        height: fit-content;
      }
      > div:last-child {
        width: 25px;
      }
    }
  }
`;

export default function ContactModal({
  setIsOpen,
  username,
  firstName,
  lastName,
  email,
  phone,
  street,
  state,
  city,
  postcode,
  picture,
}: Contact & { setIsOpen: any }) {
  const ref = useRef<any>(null);

  useEffect(() => {
    function handleClickOutside(e: Event) {
      if (ref.current && !ref.current?.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsOpen]);

  return (
    <Container ref={ref}>
      <div id='modal'>
        <div className='details'>
          <div onClick={() => setIsOpen(false)}>X</div>
          <div className='picture'>
            <img src={picture} alt={username} />
          </div>
          <div className='user-information'>
            <div className='fullname'>{`${lastName.toUpperCase()}, ${firstName}`}</div>
            <div className='grid'>
              <b>email</b>
              <span>{email}</span>
              <b>phone</b>
              <span>{phone}</span>
              <b>street</b>
              <span>{street}</span>
              <b>state</b>
              <span>{state}</span>
              <b>city</b>
              <span>{city}</span>
              <b>postcode</b>
              <span>{postcode}</span>
            </div>
          </div>
          <div>
            <div id='username'>{`USERNAME ${username}`}</div>
          </div>
        </div>
      </div>
    </Container>
  );
}
