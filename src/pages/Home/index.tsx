import { Select, Tabs } from 'antd';
import { useState } from 'react';
import { Filter, Header, Map } from '../../components';
import {
  Classe,
  Familia,
  Ordem,
  Subordem
} from '../../components/GraphByOccurrence';
const { Option } = Select;
import { Box, BoxText } from './styles';

export function Home() {
  const [occByType, setOccByType] = useState('Classe');
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
      <BoxText>
        <span className="text">Quantidade de ocorrências por: </span>
        <Select
          showSearch
          placeholder="Selecione uma opção"
          onChange={(e) => setOccByType(e)}
          value={!!occByType ? occByType : undefined}
        >
          <Option key="Classe" value="Classe">
            Classe
          </Option>
          <Option key="Ordem" value="Ordem">
            Ordem
          </Option>
          <Option key="Subordem" value="Subordem">
            Subordem
          </Option>
          <Option key="Família" value="Família">
            Família
          </Option>
        </Select>
      </BoxText>
      {/* <Map data={data} /> */}

      {occByType === 'Classe' ? (
        <Classe />
      ) : occByType === 'Ordem' ? (
        <Ordem />
      ) : occByType === 'Subordem' ? (
        <Subordem />
      ) : (
        <Familia />
      )}
    </Box>
  );
}
