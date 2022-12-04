import { LineChart } from '../..';

export function AmeacaLine() {
  return (
    <LineChart
      //      aggregate={{
      //        aggregate: [
      //          {
      //            op: 'count',
      //            field: 'id',
      //            as: 'Qtde'
      //          }
      //        ],
      //        groupby: ['data']
      //      }}

      color={{
        field: 'ameacada',
        type: 'nominal',
        title: 'Condição',
        legend: null,
        scale: {
          domain: ['Não informado', 'Não', 'Sim'],
          range: ['#999999', '#A2C7F5', '#FC6A10']
        }
      }}
      //      tooltip={[
      //       { field: 'Qtde', type: 'quantitative' },
      ///     { field: 'ameacada', type: 'nominal' }
      /// ]}

      tooltip={[{ signal: 'datum' }]}
    />
  );
}
