import styled from 'styled-components';

export const Container = styled.div`
  width: 20%;
  height: 4rem;
  line-height: 4rem;
  background-color: ${props => !props.confirm ? 'white' : props.theme.colorNeutralDark};
  color: ${props => !props.confirm ? props.theme.colorNeutralDark : props.theme.colorNeutralLight};
  box-shadow: ${props => props.theme.shadow};
  border-radius: ${props => props.theme.radius};
  text-align: center;
  position: absolute;
  top: 1rem;
  left: 50%;
  margin-left: -10%
  z-index: 999;
  cursor: ${props => props.confirm ? 'pointer' : 'default'};
`;
