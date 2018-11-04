import styled from 'styled-components';

export const Container = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: white;
  padding:  0.75rem;
  border-radius: 9999px;
  box-shadow: 0 2px 4px 0 rgba(0, 0 ,0 , 0.10);
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1000;

  .github {
    display: flex;
    align-items: center;
    justify-items: center;
    padding: 0;
    background: transparent;
    border: 0;
    cursor: pointer;

    svg {
      fill: currentColor;
      width: 2.5rem;
    }
  }

  .user {
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin: -0.75rem;
  }
`;
