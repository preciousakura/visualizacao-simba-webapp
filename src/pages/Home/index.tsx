import { Tabs } from 'antd';
import { Filter, Header, HorizontalBar, Map } from '../../components';
import { Box } from './styles';
import { useData } from '../../hooks/useData';

export function Home() {
  const { data } = useData();
  return (
    <Box>
      <Header />
      <Filter />
      <Tabs>
        <Tabs.TabPane tab="Condição" key="item-1">
          Condição
        </Tabs.TabPane>
        <Tabs.TabPane tab="Estágio" key="item-2">
          Estágio
        </Tabs.TabPane>
        <Tabs.TabPane tab="Ameaça" key="item-3">
          Ameaça
        </Tabs.TabPane>
      </Tabs>

      <HorizontalBar
        data={data}
        y={{
          field: 'classe',
          type: 'nominal',
          title: 'Classe',
          sort: '-x'
        }}
        x={{
          aggregate: 'count',
          field: 'id',
          type: 'quantitative',
          title: 'Ocorrências'
        }}
        title={''}
        tooltip={[
          { field: 'classe', title: 'Classe' },
          { aggregate: 'count', field: 'Classe', title: 'Ocorrências' }
        ]}
      />
      <Map data={data} />
    </Box>
  );
}
