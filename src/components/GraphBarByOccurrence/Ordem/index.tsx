import { HorizontalBar } from '../..';

export function OrdemBar() {
  return (
    <HorizontalBar
      y={{
        field: 'ordem',
        type: 'nominal',
        sort: '-x',
        title: null
      }}
      x={{
        aggregate: 'count',
        field: 'id',
        type: 'quantitative',
        title: null
      }}
      title={'Quantidade de ocorrĂȘncia por ordem'}
      tooltip={[
        { field: 'ordem', title: 'Ordem' },
        { aggregate: 'count', field: 'ordem', title: 'OcorrĂȘncias' }
      ]}
    />
  );
}
