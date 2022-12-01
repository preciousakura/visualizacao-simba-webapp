import { HorizontalBar } from '../..';
import { useData } from '../../../hooks/useData';

export function Classe() {
  const { data } = useData();

  return (
    <HorizontalBar
      data={data}
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
