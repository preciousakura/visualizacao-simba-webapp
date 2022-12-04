import { HorizontalBar } from '../..';

export function GeneroBar() {
  return (
    <HorizontalBar
      height={1200}
      y={{
        field: 'genero',
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
      title={'Quantidade de ocorrência por gênero'}
      tooltip={[
        { field: 'genero', title: 'Gênero' },
        { aggregate: 'count', field: 'genero', title: 'Ocorrências' }
      ]}
    />
  );
}
