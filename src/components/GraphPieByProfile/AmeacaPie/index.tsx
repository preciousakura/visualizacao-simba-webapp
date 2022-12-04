import { PieChart } from '../..';

export function AmeacaPie() {
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
        groupby: ['ameacada']
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
        field: 'ameacada',
        type: 'nominal',
        legend: {
          title: 'Espécie Ameaçada',
          direction: 'vertical',
          orient: 'none',
          legendX: 285,
          legendY: -30
        },
        scale: {
          domain: ['Não informado', 'Não', 'Sim'],
          range: ['#999999', '#A2C7F5', '#FC6A10']
        }
      }}
      tooltip={[
        { field: 'ameacada', type: 'nominal' },
        { field: 'Porcentagem', type: 'quantitative', format: '.2%' },
        { field: 'Qtde', title: 'Quantidade', type: 'quantitative' }
      ]}
    />
  );
}
