import { Select, Tabs } from 'antd';
import { useState } from 'react';
import { Filter, ForceGraph, Header, Map } from '../../components';
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
import { Box, BoxText } from './styles';

export function Home() {
  const [occByType, setOccByType] = useState('Bar');
  return (
    <Box>
      <Header />

      <Filter />
      <h2>Ocorrências por município</h2>
      <Map />

      <h2>Seleção por perfil</h2>
      <Tabs>
        <Tabs.TabPane tab="Condição" key="item-1">
          <CondicaoPie />
          <CondicaoLine />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Estágio de Desenvolvimento" key="item-2">
          <EstagioPie />
          <EstagioLine />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Ameaça de Extinção" key="item-3">
          <AmeacaPie />
          <AmeacaLine />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Sexo" key="item-4">
          <SexoPie />
          <SexoLine />
        </Tabs.TabPane>
      </Tabs>

      <h2>Ranking por classificação</h2>

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
          <Option key="Gênero" value="Gênero">
            Gênero
          </Option>
          <Option key="Espécie" value="Espécie">
            Espécie
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
      ) : occByType === 'Gênero' ? (
        <GeneroBar />
      ) : occByType === 'Espécie' ? (
        <EspecieBar />
      ) : (
        <FamiliaBar />
      )}

      <h2>Relações taxonômicas</h2>
      <ForceGraph />
    </Box>
  );
}
