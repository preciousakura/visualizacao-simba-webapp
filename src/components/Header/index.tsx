import { Box } from './styles';

export function Header() {
  return (
    <Box>
      <div className="header-title">
        <h2>Projeto Final Visualização de Dados 2022.2</h2>
        <img src="https://simba.petrobras.com.br/simba/web/marca.png" />
      </div>

      <p className="tag-data">Última atualização: 04/12/2022</p>
      <div className="box-intro">
        <div className="text">
          <p>
            Nosso trabalho é uma análise de dados públicos do{' '}
            <b>
              <a
                target="_blank"
                href="https://simba.petrobras.com.br/simba/web/sistema/"
              >
                Sistema de Informação de Monitoramento da Biota Aquática (SIMBA)
              </a>
            </b>
            , obtidos por meio dos Projetos de Monitoramento de Praias, do
            estado do Rio de Janeiro, no período de 2015 a 2018. O objetivo das
            visualizações criadas pela equipe é, primordialmente, avaliar o
            perfil dos animais encontrados.
          </p>
        </div>
      </div>
    </Box>
  );
}
