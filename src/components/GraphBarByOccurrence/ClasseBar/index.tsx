import { HorizontalBar } from '../..';

export function ClasseBar() {
  return (
    <HorizontalBar
      y={{
        field: 'classe',
        type: 'nominal',
        title: null,
        sort: '-x'
      }}
      x={{
        aggregate: 'count',
        field: 'id',
        type: 'quantitative',
        title: null
      }}
      title={'Quantidade de ocorrĂȘncia por classe'}
      tooltip={[
        { field: 'classe', title: 'Classe' },
        { aggregate: 'count', field: 'classe', title: 'OcorrĂȘncias' }
      ]}
    />
  );
}
