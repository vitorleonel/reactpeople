import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  top: 0;
  z-index: 999;
`;

export const Message = styled.div`
  background-color: ${props => props.theme.colorNeutralDark};
  color: ${props => props.theme.colorNeutralLight};
  box-shadow: ${props => props.theme.shadow};
  border-radius: ${props => props.theme.radius};
  padding: 1.25rem;

  span {
    color: ${props => props.theme.colorLink};
    font-weight: bold;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Button = styled.div`
  background-color: white;
  box-shadow: ${props => props.theme.shadow};
  border-radius: ${props => props.theme.radius};
  padding: 1.25rem;
  margin-left: 1rem;
  cursor: pointer;
`;
