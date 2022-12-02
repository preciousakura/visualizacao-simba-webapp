import { LineChart } from '../..';

export function AmeacaLine() {
  return (
    <LineChart
      color={{
        field: 'ameacada',
        type: 'nominal',
        title: 'Condição'
      }}
      tooltip={[
        { field: 'data', type: 'nominal' },
        { field: 'ameacada', type: 'nominal' }
      ]}
    />
  );
}
