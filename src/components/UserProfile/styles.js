import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 2.5rem;
    border-radius: 100%;
  }

  .info {
    padding-left: 1rem;
    flex-direction: column;
    display: none;

    &__email {
      font-size: 0.87rem;
      color: rgba(0, 0, 0, 0.5);
    }
  }

  @media screen and (min-width: 768px) {
    .info {
      display: flex;
    }
  }
`;
