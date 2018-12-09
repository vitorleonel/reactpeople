import styled from "styled-components";

export const Container = styled.div`
  color: ${props => props.theme.colorNeutralDark};
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    width: 2.5rem;
  }

  span {
    padding-left: 0.75rem;
  }
`;
