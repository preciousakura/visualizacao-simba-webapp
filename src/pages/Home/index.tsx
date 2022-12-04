import { Select, Tabs } from 'antd';
import { useState } from 'react';
import { Filter, Header, HorizontalGroupBar, Map } from '../../components';
import {
  ClasseBar,
  EspecieBar,
  FamiliaBar,
  GeneroBar,
  OrdemBar,
  SubordemBar
} from '../../components/GraphBarByOccurrence';
import {
  AmeacaLine,
  CondicaoLine,
  EstagioLine,
  SexoLine
} from '../../components/GraphLineByProfile';
import {
  AmeacaPie,
  CondicaoPie,
  EstagioPie,
  SexoPie
} from '../../components/GraphPieByProfile';
const { Option } = Select;
import { Box, BoxColumn, BoxText } from './styles';

export function Home() {
  const [occByType, setOccByType] = useState('Bar');
  return (
    <Box>
      <Header />
      <Filter />
      <h2>Ocorrências por município</h2>
      <Map />
      <h2>Perfil</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <Tabs>
        <Tabs.TabPane tab="Condição" key="item-1">
          <CondicaoPie />
          <CondicaoLine />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Estágio" key="item-2">
          <EstagioPie />
          <EstagioLine />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Ameaça" key="item-3">
          <AmeacaPie />
          <AmeacaLine />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Sexo" key="item-4">
          <SexoPie />
          <SexoLine />
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
          <Option key="Espécie" value="Espécie">
            Espécie
          </Option>
          <Option key="Gênero" value="Gênero">
            Gênero
          </Option>
        </Select>
      </BoxText>

      {occByType === 'Classe' ? (
        <ClasseBar />
      ) : occByType === 'Ordem' ? (
        <>
          <OrdemBar />
        </>
      ) : occByType === 'Subordem' ? (
        <SubordemBar />
      ) : occByType === 'Espécie' ? (
        <EspecieBar />
      ) : occByType === 'Gênero' ? (
        <GeneroBar />
      ) : (
        <FamiliaBar />
      )}
    </Box>
  );
}
