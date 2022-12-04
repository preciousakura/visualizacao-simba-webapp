import { Box } from './styles';
import boto from '../../assets/boto.jpeg';
import mydas from '../../assets/mydas.jpg';
import atoba from '../../assets/atoba.jpg';

export function Footer() {
  return (
    <Box>
      <div className="images">
        <div className="image">
          <img src={boto} alt="boto" />
        </div>
        <div className="image">
          <img src={mydas} alt="mydas" />
        </div>
        <div className="image">
          <img src={atoba} alt="atoba" />
        </div>
      </div>

      <div className="credito">
        <p>
          Desenvolvido por{' '}
          <a href="https://github.com/preciousakura" target="_blank">
            Isabel Cristina
          </a>
          ,{' '}
          <a href="https://github.com/luizaclara" target="_blank">
            Luiza Clara
          </a>{' '}
          e{' '}
          <a href="https://github.com/SergioGarciaBF" target="_blank">
            Sérgio Garcia
          </a>
        </p>
      </div>
    </Box>
  );
}
