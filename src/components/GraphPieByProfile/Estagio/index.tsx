import { PieChart } from '../..';

export function Estagio() {
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
        groupby: ['estagio']
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
        field: 'estagio',
        type: 'nominal',
        legend: {
          title: 'Estágio',
          direction: 'vertical',
          orient: 'none',
          legendX: 285,
          legendY: -30
        }
      }}
      tooltip={[
        { field: 'estagio', type: 'nominal' },
        { field: 'Porcentagem', type: 'quantitative', format: '.2%' },
        { field: 'Qtde', title: 'Quantidade', type: 'quantitative' }
      ]}
    />
  );
}
