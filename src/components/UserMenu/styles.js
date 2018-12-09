import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  padding: 0.75rem;
  border-radius: ${props => props.theme.radius};
  box-shadow: ${props => props.theme.shadow};
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  justify-items: center;
  align-items: center;
  z-index: 500;
`;
