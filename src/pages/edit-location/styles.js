import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 1rem 3.75rem 1rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  z-index: 500;

  @media screen and (min-width: 768px) {
    padding: 1rem;
  }

  @media screen and (min-width: 1024px) {
    bottom: auto;
    top: 0;
  }
`;

export const Message = styled.div`
  background-color: ${props => props.theme.colorNeutralDark};
  color: ${props => props.theme.colorNeutralLight};
  box-shadow: ${props => props.theme.shadow};
  border-radius: ${props => props.theme.radius};
  padding: 1.45rem;
  text-align: center;
  user-select: none;

  span {
    color: ${props => props.theme.colorLink};
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ConfirmLocation = styled.div`
  padding: 1.25rem;
  background-color: white;
  box-shadow: ${props => props.theme.shadow};
  border-radius: ${props => props.theme.radius};
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 500;
  display: flex;
  align-items: center;
  cursor: pointer;

  .icon {
    margin-right: 0.75rem;
  }
`;
