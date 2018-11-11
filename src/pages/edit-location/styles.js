import styled from 'styled-components';

export const Container = styled.div`
  width: 20%;
  padding: 1.5rem;
  background-color: ${props => !props.confirm ? 'white' : props.theme.colorNeutralDark};
  color: ${props => !props.confirm ? props.theme.colorNeutralDark : props.theme.colorNeutralLight};
  box-shadow: ${props => props.theme.shadow};
  border-radius: ${props => props.theme.radius};
  text-align: center;
  position: absolute;
  bottom: 2rem;
  left: 50%;
  margin-left: -10%
  z-index: 999;
  cursor: ${props => props.confirm ? 'pointer' : 'default'};
`;
