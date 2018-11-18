import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 1rem;

  .icon {
    padding: 0.25rem;
    border-radius: 100%;
    display: block;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
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
      padding: 1rem 0.75rem;
      color: white;
      text-decoration: none;
      display: flex;
      align-items: center;

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }

      span {
        margin-left: 0.75rem;
      }
    }
  }

  .opened {
    display: block;
  }
`;
