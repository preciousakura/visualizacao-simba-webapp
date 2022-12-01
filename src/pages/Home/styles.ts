import styled from 'styled-components';

export const Box = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem;

  .vega-embed.has-actions {
    width: 100%;
    svg.marks,
    canvas.marks {
      width: 100%;
      height: auto;
    }
  }

  .ant-select {
    width: 210px;
  }
`;

export const BoxColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const BoxText = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  gap: 0.5rem;

  .text {
    color: #393e46;

    font-weight: 700;
    font-size: 1rem;
  }
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;
