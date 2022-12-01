import { HorizontalBar } from '../..';

export function Classe() {
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
      title={'Quantidade de ocorrência por classe'}
      tooltip={[
        { field: 'classe', title: 'Classe' },
        { aggregate: 'count', field: 'classe', title: 'Ocorrências' }
      ]}
    />
  );
}
