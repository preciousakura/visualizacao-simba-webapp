import { PieChart } from '../..';

export function EstagioPie() {
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
        },
        scale: {
          domain: ['Adulto', 'Juvenil', 'Filhote', 'Feto', 'Indeterminado'],
          range: ['#0B5890', '#4E8BC6', '#A2C7F5', '#CBDFF8', '#999999']
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
