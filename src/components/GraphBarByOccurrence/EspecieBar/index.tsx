import { HorizontalBar } from '../..';

export function EspecieBar() {
  return (
    <HorizontalBar
      height={1000}
      y={{
        field: 'especie',
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
      title={'Quantidade de ocorrência por espécie'}
      tooltip={[
        { field: 'especie', title: 'Espécie' },
        { aggregate: 'count', field: 'especie', title: 'Ocorrências' }
      ]}
    />
  );
}
