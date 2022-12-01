import { HorizontalBar } from '../..';
import { useData } from '../../../hooks/useData';

export function Familia() {
  const { data } = useData();

  return (
    <HorizontalBar
      data={data}
      y={{
        field: 'familia',
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
      title={'Quantidade de ocorrência por família'}
      tooltip={[
        { field: 'familia', title: 'Família' },
        { aggregate: 'count', field: 'familia', title: 'Ocorrências' }
      ]}
    />
  );
}
