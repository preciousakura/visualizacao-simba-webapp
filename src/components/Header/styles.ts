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
  }
  .box-intro {
    display: flex;
    border: 1px solid #e3e6e4;
    border-radius: 7px;
    padding: 1.2rem;
    gap: 1rem;

    img {
      max-width: 450px;
      height: auto;
    }
  }
`;
