import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  padding: 0.75rem;
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
    border-radius: 9999px;
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
    display: flex;
    flex-direction: column;

    &__email {
      font-size: 0.87rem;
      color: rgba(0, 0, 0, 0.5);
    }
  }

  .menu {
    min-width: 100%;
    background-color: ${props => props.theme.colorNeutralDark};
    padding: 1rem;
    list-style: none;
    box-shadow: ${props => props.theme.shadow};
    border-radius: ${props => props.theme.radius};
    position: absolute;
    right: 0;
    top: 3.75rem;
    display: none;

    li {
      padding: 0.5rem;
      white-space: nowrap;

      a {
        color: ${props => props.theme.colorLink};
        text-decoration: none;

        &:hover {
          color: white;
        }
      }
    }
  }

  .menu.opened {
    display: block;
  }
`;
