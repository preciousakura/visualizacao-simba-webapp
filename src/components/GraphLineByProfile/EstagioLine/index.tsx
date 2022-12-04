import { LineChart } from '../..';

export function EstagioLine() {
  return (
    <LineChart
      color={{
        field: 'estagio',
        type: 'nominal',
        scale: {
          domain: ['Adulto', 'Juvenil', 'Filhote', 'Feto', 'Indeterminado'],
          range: ['#0B5890', '#4E8BC6', '#A2C7F5', '#CBDFF8', '#999999']
        }
      }}
      tooltip={[
        { field: 'data', type: 'nominal' },
        { field: 'estagio', type: 'nominal' }
      ]}
    />
  );
}
