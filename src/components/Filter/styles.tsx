import styled from 'styled-components';

export const Box = styled.div`
  margin: 1rem 0rem;
  display: flex;
  align-items: center;
  border-radius: 7px;
  gap: 1.2rem;

  width: 100%;

  button.clear-filter {
    justify-self: flex-start;
    outline: none;
    gap: 5px;

    background: none;
    border: none;
    color: #393e46;

    display: flex;
    align-items: center;
    transition: filter 0.2s;

    span {
      font-weight: 700;
      font-size: 0.8rem;
      margin-top: 3px;
    }

    &:hover {
      filter: brightness(0.8);
    }
  }

  @media (max-width: 1300px) {
    flex-direction: column;
  }

  @media (max-width: 950px) {
    flex-direction: column;
    gap: 20px;
  }

  @media (max-width: 660px) {
    .ant-select {
      width: 50%;
    }
  }

  @media (max-width: 550px) {
    .ant-select {
      width: 100%;
    }
  }
`;
