import { PieChart } from '../..';

export function CondicaoPie() {
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
        groupby: ['condicao']
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
        field: 'condicao',
        type: 'nominal',
        legend: {
          title: 'Condição',
          direction: 'vertical',
          orient: 'none',
          legendX: 285,
          legendY: -30
        },

        scale: {
          domain: ['Vivo', 'Morto'],
          range: ['#A2C7F5', '#FC6A10']
        }
      }}
      tooltip={[
        { field: 'condicao', type: 'nominal' },
        { field: 'Porcentagem', type: 'quantitative', format: '.2%' },
        { field: 'Qtde', title: 'Quantidade', type: 'quantitative' }
      ]}
    />
  );
}
