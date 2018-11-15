import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 1000;
  cursor: pointer;

  svg {
    width: 2.5rem;
  }
`;
