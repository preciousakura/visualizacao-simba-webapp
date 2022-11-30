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
          'https://raw.githubusercontent.com/SergioGarciaBF/Testes/main/PMP-BS%20%C3%81rea%20RJ%202.csv'
        )
        .then((res) => {
          const dataFormatted: Data[] = res.map((d) => {
            return {
              ameacada: d['Amea�ada'] as string,
              classe: d['Classe'] as string,
              codigo: d['Codigo'] as string,
              condicao: d['Condi��o'] as string,
              especie: d['Especie'] as string,
              estagio: d['Estagio de desenvolvimento'] as string,
              familia: d['Fam�lia'] as string,
              genero: d['G�nero'] as string,
              ordem: d['Ordem'] as string,
              oleo: d['Presenca de oleo'] as string,
              subordem: d['Subordem'] as string
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
