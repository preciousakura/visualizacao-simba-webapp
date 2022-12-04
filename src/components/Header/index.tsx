import { Box } from './styles';

export function Header() {
  return (
    <Box>
      <div className="header-title">
        <h2>Projeto Final Visualização de Dados 2022.2</h2>
        <img src="https://simba.petrobras.com.br/simba/web/marca.png" />
      </div>

      <p className="equipe">
        Equipe: Isabel Cristina, Luiza Clara e Sérgio Garcia
      </p>
      <p className="tag-data">Última atualização: 04/12/2022</p>
      <div className="box-intro">
        <div className="text">
          <p>
            Este portfólio utiliza dados coletados pelos{' '}
            <b>
              <a
                target="_blank"
                href="https://simba.petrobras.com.br/simba/web/sistema/pmp/9/individualfaunaoccurrence/"
              >
                Projetos de Monitoramento de Praias
              </a>
            </b>{' '}
            do estado do Rio de Janeiro, no período de 2015 a 2018, e tem por
            objetivo entender o perfil dos animais encontrados. É possível
            realizar análise de distribuição das ocorrências por região, tempo e
            porcentagem de condição.
          </p>
        </div>
      </div>
    </Box>
  );
}
