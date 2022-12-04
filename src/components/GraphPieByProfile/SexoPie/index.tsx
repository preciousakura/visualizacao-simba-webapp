import { PieChart } from '../..';

export function SexoPie() {
  return (
    <PieChart
      aggregate={{
        aggregate: [
          {
            op: 'count',
            field: 'id',
            as: 'Qtde'
          }
        ],
        groupby: ['sexo']
      }}
      window={{
        window: [
          {
            op: 'sum',
            field: 'Qtde',
            as: 'Total'
          }
        ],
        frame: [null, null]
      }}
      calculate={{
        calculate: 'datum.Qtde/datum.Total',
        as: 'Porcentagem'
      }}
      color={{
        field: 'sexo',
        type: 'nominal',
        legend: {
          title: 'Sexo',
          direction: 'vertical',
          orient: 'none',
          legendX: 285,
          legendY: -30
        },
        scale: {
          domain: ['Indefinido', 'Macho', 'Fêmea'],
          range: ['#999999', '#A2C7F5', '#FC6A10']
        }
      }}
      tooltip={[
        { field: 'sexo', type: 'nominal' },
        { field: 'Porcentagem', type: 'quantitative', format: '.2%' },
        { field: 'Qtde', title: 'Quantidade', type: 'quantitative' }
      ]}
    />
  );
}
