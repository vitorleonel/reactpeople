import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  padding: 0.7rem;
  border-radius: ${props => props.theme.radius};
  box-shadow: ${props => props.theme.shadow};
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1000;
  display: flex;
  justify-items: center;

  svg,
  img {
    width: 2.5rem;
  }

  img {
    border-radius: 100%;
  }

  .github,
  .user {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .github {
    color: ${props => props.theme.colorNeutralDark};
    text-decoration: none;

    span {
      padding-left: 0.75rem;
    }
  }

  .user-info {
    padding-left: 0.75rem;
    flex-direction: column;
    display: none;

    &__email {
      font-size: 0.87rem;
      color: rgba(0, 0, 0, 0.5);
    }
  }

  .menu {
    min-width: 100%;
    background-color: ${props => props.theme.colorNeutralDark};
    padding: 0.75rem 0;
    box-shadow: ${props => props.theme.shadow};
    border-radius: ${props => props.theme.radius};
    position: absolute;
    right: 0;
    top: 4.5rem;
    display: none;

    a {
      white-space: nowrap;
      padding: 1rem 1.5rem;
      color: white;
      text-decoration: none;
      display: flex;

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }

      span {
        margin-left: 0.75rem;
      }
    }
  }

  .menu.opened {
    display: block;
  }

  @media screen and (min-width: 768px) {
    .user-info {
      display: flex;
    }
  }
`;
