import { LineChart } from '../..';

export function CondicaoLine() {
  return (
    <LineChart
      color={{
        field: 'condicao',
        type: 'nominal',
        scale: {
          domain: ['Vivo', 'Morto'],
          range: ['#A2C7F5', '#FC6A10']
        }
      }}
      tooltip={{
        field: 'condicao',
        type: 'nominal',
        title: 'Condição'
      }}
    />
  );
}
