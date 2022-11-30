import { Select, Tabs } from 'antd';
import { useState } from 'react';
import { Header, HorizontalBar } from '../../components';
import { Box } from './styles';
import Papa from 'papaparse';
const { Option } = Select;

export function Home() {
  const [data, setData] = useState<any>();

  Papa.parse('../../data/simba.csv', {
    header: true,
    download: true,
    dynamicTyping: true,
    complete: function (results) {
      console.log(results);
    }
  });

  return (
    <Box>
      <Header />
      <Select
        showSearch
        allowClear
        placeholder="Selecione um município"
      ></Select>
      <Select showSearch allowClear placeholder="Selecione uma ameaça"></Select>
      <Select
        showSearch
        allowClear
        placeholder="Selecione um estágio de desenvolvimento"
      ></Select>

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

      <HorizontalBar data={[]} />
    </Box>
  );
}
