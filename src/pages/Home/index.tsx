import { Select, Tabs } from 'antd';
import { Data } from 'simba';
import * as d3 from 'd3';
import { useEffect, useState } from 'react';
import { Header, HorizontalBar } from '../../components';
import { Box } from './styles';

const { Option } = Select;

export function Home() {
  const [data, setData] = useState<Data[]>();

  useEffect(() => {
    const res = async () => {
      await d3
        .csv(
          'https://raw.githubusercontent.com/preciousakura/visualizacao-simba-webapp/master/src/data/simbaData.csv'
        )
        .then((res) => {
          const dataFormatted: Data[] = res.map((d) => {
            return {
              condicao: d['Condição'] as string,
              data: d['Data/Hora'] as string,
              estagio: d[''] as string,
              ameacada: d['"Espécie ameaçada"'] as string,
              classe: d[' "OFAI - Classe do indivíduo" '] as string,
              ordem: d[''] as string,
              subordem: d[''] as string,
              familia: d[''] as string,
              genero: d[''] as string,
              municipio: d[''] as string,
              id: d[''] as string
            };
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
