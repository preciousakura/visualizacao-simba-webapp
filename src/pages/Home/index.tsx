import { Tabs } from 'antd';
import { Filter, Header, HorizontalBar } from '../../components';
import { Box } from './styles';
import { useBoxWidth } from '../../hooks/useBoxWidth';
import { useData } from '../../hooks/useData';

export function Home() {
  const { boxRef, width } = useBoxWidth<HTMLDivElement>();
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

      <div ref={boxRef}>
        <HorizontalBar width={width} data={data} />
      </div>
    </Box>
  );
}
