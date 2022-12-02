import { LineChart } from '../..';

export function EstagioLine() {
  return (
    <LineChart
      color={{
        field: 'estagio',
        type: 'nominal'
      }}
      tooltip={[
        { field: 'data', type: 'nominal' },
        { field: 'estagio', type: 'nominal' }
      ]}
    />
  );
}
