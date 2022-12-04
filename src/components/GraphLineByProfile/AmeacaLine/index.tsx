import { LineChart } from '../..';

export function AmeacaLine() {
  return (
    <LineChart
      color={{
        field: 'ameacada',
        type: 'nominal',
        title: 'Condição',
        scale: {
          domain: ['Não informado', 'Não', 'Sim'],
          range: ['#999999', '#A2C7F5', '#FC6A10']
        }
      }}
      tooltip={[
        { field: 'data', type: 'nominal' },
        { field: 'ameacada', type: 'nominal' }
      ]}
    />
  );
}
