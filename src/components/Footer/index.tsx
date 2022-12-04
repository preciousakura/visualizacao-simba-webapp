import { Box } from './styles';

export function Footer() {
  return (
    <Box>
      <div className="images">
        <div className="image">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Sotalia_guianensis.jpg"
            alt="boto"
          />
        </div>
        <div className="image">
          <img
            src="https://1.bp.blogspot.com/-AWukblKwwpc/VaR4xSa7VhI/AAAAAAAAC2I/S-edh_JmBdE/s1600/Tartaruga%2Bverde_Chelonia%2Bmydas.jpg"
            alt="mydas"
          />
        </div>
        <div className="image">
          <img
            src="https://s3.amazonaws.com/media.wikiaves.com.br/images/4931/1394794g_87e3640044c32db807f5abcee5908403.jpg"
            alt="atoba"
          />
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
