import { HorizontalBar } from '../..';

export function Ordem() {
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
      title={'Quantidade de ocorrência por ordem'}
      tooltip={[
        { field: 'ordem', title: 'Ordem' },
        { aggregate: 'count', field: 'ordem', title: 'Ocorrências' }
      ]}
    />
  );
}
