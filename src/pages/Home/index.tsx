import { Box } from "./styles";
import logo from '../../assets/logo.png'

export function Home() {
    return <Box>
        <header>
        <img src={logo} alt="Logo do simba"/>
        <p>
            Os <b>Projetos de Monitoramento de Praias (PMP)</b> são desenvolvidos para o atendimento de condicionantes do licenciamento ambiental federal, conduzido pelo <b>IBAMA</b>, das atividades de exploração e produção (E&P) de petróleo e gás natural offshore da PETROBRAS nas Bacias de Santos, de Campos, do Espírito Santo, de Sergipe-Alagoas e Potiguar.

        </p>
        <p>
            Esses projetos têm como objetivo avaliar as possíveis interferências das atividades de E&P da Petrobras, na área de abrangência dos projetos, sobre os tetrápodes marinhos (aves, tartarugas e mamíferos marinhos), por meio do monitoramento das praias, do atendimento veterinário aos animais vivos debilitados e da coleta para estudos dos animais mortos.
        </p>
        </header>
    </Box>
}