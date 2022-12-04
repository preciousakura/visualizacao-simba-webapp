import styled from 'styled-components';

export const Box = styled.div`
  max-width: 1496px;
  margin: 0 auto;
  .images {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    .image {
      height: 350px;
      overflow-y: hidden;
      img {
        width: 100%;
        height: 350px;
      }
    }
  }

  .credito {
    background: #39bee9;
    width: 100%;
    p {
      text-align: center;
      font-weight: 700;
      margin: 0;
      padding: 20px;
      a {
        cursor: pointer;
        color: #effafc;
      }
    }
  }
`;
