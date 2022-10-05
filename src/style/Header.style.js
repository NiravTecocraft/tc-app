import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  padding: 20px;
`;
export const LogoWrapper = styled.div`
  & .gatsby-image-wrapper {
    width: 160px;
  }
  flex: 0 0 20%;
`;

export const MenuWrapper = styled.div`
  flex: 0 0 60%;

  & ul {
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;

    & li {
      & a {
        color: #000;
        text-decoration: none;
        position: relative;
        transition: all 0.3s 0.2s ease;

        &:hover {
          &::before {
            opacity: 1;
            color: #fb8a8a;
            width: 40px;
            left: 0;
          }
        }

        &::before {
          content: '';
          position: absolute;
          width: 0px;
          height: 4px;
          background: linear-gradient(90deg, #121211 0%, #c6c6c6 100%);
          bottom: -10px;
          border-radius: 4px;
          transition: all 0.4s cubic-bezier(0.82, 0.02, 0.13, 1.26);
          left: 100%;
        }
      }
    }
  }
`;
export const InnerHeader = styled.div`
  display: flex;
`;

export const HeaderButton = styled.div`
  flex: 0 0 20%;
  text-align: right;

  & button {
    --background: #222222;
    --text: #fff;
    --font-size: 16px;
    box-shadow: 0 2px 8px -1px rgba(39, 94, 254, 0.32);
    padding: 16px 32px;
    font-weight: 500;
    line-height: var(--font-size);
    border-radius: 24px;
    display: block;
    outline: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
    font-size: var(--font-size);
    letter-spacing: 0.5px;
    background: var(--background);
    color: var(--text);
    box-shadow: var(--shadow);
    transform: translateY(var(--y));
    transition: transform var(--duration) ease, box-shadow var(--duration) ease;
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: none;
    margin-left: auto;

    &:hover {
      box-shadow: 0 4px 20px -2px rgba(39, 94, 254, 0.5);
      background: #222222;
      transition: 0.3s;
    }

    &:focus {
      background: #222222 !important;
    }
  }
`;
