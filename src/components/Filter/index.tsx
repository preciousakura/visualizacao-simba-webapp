import { Box } from './styles';
import { Select } from 'antd';
import { useFilter } from '../../hooks/useFilter';
import rj from '../../data/rj_geojson.json';
import { BiTrash } from 'react-icons/bi';

const { Option } = Select;
export function Filter() {
  const {
    city,
    condicao,
    ameaca,
    estagio,
    onChangeCity,
    onChangeAmeaca,
    onChangeCondicao,
    onChangeEstagio,
    erased
  } = useFilter();
  return (
    <Box>
      <Select
        showSearch
        allowClear
        placeholder="Selecione um município"
        onChange={onChangeCity}
        value={!!city ? city : undefined}
      >
        {rj.features.map((city) => (
          <Option key={city.properties.id} value={city.properties.name}>
            {city.properties.name}
          </Option>
        ))}
      </Select>
      <Select
        showSearch
        allowClear
        placeholder="Ameaçado de extincão"
        onChange={onChangeAmeaca}
        value={!!ameaca ? ameaca : undefined}
      >
        <Option key="sim" value="Sim">
          Sim
        </Option>
        <Option key="nao" value="Não">
          Não
        </Option>
      </Select>
      <Select
        showSearch
        allowClear
        placeholder="Selecione um estágio de desenvolvimento"
        onChange={onChangeEstagio}
        value={!!estagio ? estagio : undefined}
      >
        <Option key="adulto" value="Adulto">
          Adulto
        </Option>
        <Option key="juvenil" value="Juvenil">
          Juvenil
        </Option>
        <Option key="filhote" value="Filhote">
          Filhote
        </Option>
        <Option key="feto" value="Feto">
          Feto
        </Option>
        <Option key="indeterminado" value="Indeterminado">
          Indeterminado
        </Option>
      </Select>
      <Select
        showSearch
        allowClear
        placeholder="Selecione uma condição"
        onChange={onChangeCondicao}
        value={!!condicao ? condicao : undefined}
      >
        <Option key="morto" value="Morto">
          Morto
        </Option>
        <Option key="vivo" value="Vivo">
          Vivo
        </Option>
      </Select>
      <button onClick={erased} className="clear-filter">
        <BiTrash size={15} />
        <span>LIMPAR</span>
      </button>
    </Box>
  );
}
