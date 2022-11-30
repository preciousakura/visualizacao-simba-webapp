import { Select, Tabs } from 'antd';
import { Data } from 'simba';
import * as d3 from 'd3';
import { useEffect, useState } from 'react';
import { Header, HorizontalBar } from '../../components';
import { Box } from './styles';

const { Option } = Select;

export function Home() {
  const [data, setData] = useState<any[]>();

  useEffect(() => {
    const res = async () => {
      await d3
        .csv(
          'https://raw.githubusercontent.com/preciousakura/visualizacao-simba-webapp/master/src/data/simba.csv'
        )
        .then((res) => {
          const dataFormatted = res.map((d) => {
            return d;
          });
          setData(dataFormatted);
        });
    };
    res();
  }, []);
  console.log(data);
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

      <HorizontalBar data={data} />
    </Box>
  );
}
