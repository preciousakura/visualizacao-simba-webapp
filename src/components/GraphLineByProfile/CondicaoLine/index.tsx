import { LineChart } from '../..';

export function CondicaoLine() {
  return (
    <LineChart
      color={{
        field: 'condicao',
        type: 'nominal'
      }}
      tooltip={[
        { field: 'data', type: 'nominal' },
        { field: 'condicao', type: 'nominal' }
      ]}
    />
  );
}
