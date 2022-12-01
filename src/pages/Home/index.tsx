import { Select, Tabs } from 'antd';
import { useState } from 'react';
import { Filter, Header, HorizontalGroupBar, Map } from '../../components';
import {
  Classe,
  Familia,
  Ordem,
  Subordem
} from '../../components/GraphBarByOccurrence';
import { Ameaca, Condicao, Estagio } from '../../components/GraphPieByProfile';
const { Option } = Select;
import { Box, BoxText } from './styles';

export function Home() {
  const [occByType, setOccByType] = useState('Classe');
  return (
    <Box>
      <Header />
      <Filter />
      <h2>Perfil</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <Tabs>
        <Tabs.TabPane tab="Condição" key="item-1">
          <Condicao />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Estágio" key="item-2">
          <Estagio />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Ameaça" key="item-3">
          <Ameaca />
        </Tabs.TabPane>
      </Tabs>
      <h2>Taxonomia</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
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
      <Map />

      {occByType === 'Classe' ? (
        <Classe />
      ) : occByType === 'Ordem' ? (
        <>
          <Ordem />
          <HorizontalGroupBar />
        </>
      ) : occByType === 'Subordem' ? (
        <Subordem />
      ) : (
        <Familia />
      )}
    </Box>
  );
}
