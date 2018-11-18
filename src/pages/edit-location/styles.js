import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 1rem 3.75rem 1.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  z-index: 500;

  @media screen and (min-width: 768px) {
    padding: 1.5rem;
  }
`;

export const Message = styled.div`
  background-color: ${props => props.theme.colorNeutralDark};
  color: ${props => props.theme.colorNeutralLight};
  box-shadow: ${props => props.theme.shadow};
  border-radius: ${props => props.theme.radius};
  padding: 1rem;
  text-align: center;

  span {
    color: ${props => props.theme.colorLink};
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 1.45rem;
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
