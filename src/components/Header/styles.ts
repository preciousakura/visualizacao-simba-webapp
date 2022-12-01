import styled from 'styled-components';

export const Box = styled.div`
  margin-bottom: 2rem;
  h2 {
    font-size: 32px;
  }
  .tag-data {
    font-style: italic;
    font-weight: 700;
    margin-bottom: 2rem;
    @media (max-width: 630px) {
      text-align: center;
    }
  }

  .header-title {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 630px) {
      flex-direction: column;
      justify-content: center;
    }

    img {
      max-width: 250px;
      height: auto;
    }
  }
  .box-intro {
    border: 1px solid #e3e6e4;
    border-radius: 7px;
    padding: 1.2rem;
  }
`;
