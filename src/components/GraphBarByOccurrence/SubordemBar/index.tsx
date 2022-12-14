import { HorizontalBar } from '../..';

export function SubordemBar() {
  return (
    <HorizontalBar
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
      title={'Quantidade de ocorrĂȘncia por subordem'}
      tooltip={[
        { field: 'subordem', title: 'Subordem' },
        { aggregate: 'count', field: 'subordem', title: 'OcorrĂȘncias' }
      ]}
    />
  );
}
