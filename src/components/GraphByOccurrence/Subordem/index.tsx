import { HorizontalBar } from '../..';
import { useData } from '../../../hooks/useData';

export function Subordem() {
  const { data } = useData();

  return (
    <HorizontalBar
      data={data}
      y={{
        field: 'subordem',
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
      title={'Quantidade de ocorrência por subordem'}
      tooltip={[
        { field: 'subordem', title: 'Subordem' },
        { aggregate: 'count', field: 'subordem', title: 'Ocorrências' }
      ]}
    />
  );
}
