import { LineChart } from '../..';

export function SexoLine() {
  return (
    <LineChart
      color={{
        field: 'sexo',
        type: 'nominal',
        scale: {
          domain: ['Indefinido', 'Macho', 'Fêmea'],
          range: ['#999999', '#A2C7F5', '#FC6A10']
        }
      }}
      tooltip={[
        { field: 'data', type: 'nominal' },
        { field: 'sexo', type: 'nominal' }
      ]}
    />
  );
}
