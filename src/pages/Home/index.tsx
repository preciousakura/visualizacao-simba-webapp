import { HorizontalBar } from "../../components/HorizontalBar";
import { Box } from "./styles";

export function Home() {
    const barData = {
        table: [
          { a: 'A', b: 28 },
          { a: 'B', b: 55 },
          { a: 'C', b: 43 },
          { a: 'D', b: 91 },
          { a: 'E', b: 81 },
          { a: 'F', b: 53 },
          { a: 'G', b: 19 },
          { a: 'H', b: 87 },
          { a: 'I', b: 52 },
        ],
      }
    return <Box>
        <header>
        <p>
            Os <b>Projetos de Monitoramento de Praias (PMP)</b> são desenvolvidos para o atendimento de condicionantes do licenciamento ambiental federal, conduzido pelo <b>IBAMA</b>, das atividades de exploração e produção (E&P) de petróleo e gás natural offshore da PETROBRAS nas Bacias de Santos, de Campos, do Espírito Santo, de Sergipe-Alagoas e Potiguar.

        </p>
        <p>
            Esses projetos têm como objetivo avaliar as possíveis interferências das atividades de E&P da Petrobras, na área de abrangência dos projetos, sobre os tetrápodes marinhos (aves, tartarugas e mamíferos marinhos), por meio do monitoramento das praias, do atendimento veterinário aos animais vivos debilitados e da coleta para estudos dos animais mortos.
        </p>
        </header>
        <HorizontalBar data={barData} />
    </Box>

}