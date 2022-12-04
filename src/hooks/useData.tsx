import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';
import { Data } from 'simba';
import * as d3 from 'd3';
import { useFilter } from './useFilter';
import * as turf from '@turf/turf';
import rjGson from '../data/rj_geojson.json';

interface DataContextProviderProps {
  children: ReactNode;
}

interface DataContextDataProps {
  data: { table: Data[] };
}

export const DataContext = createContext({} as DataContextDataProps);

export function DataProvider({ children }: DataContextProviderProps) {
  const [data, setData] = useState<{ table: Data[] }>({ table: [] });
  const [filterData, setFilterData] = useState<{ table: Data[] }>({
    table: []
  });

  const { city, condicao, ameaca, estagio, sexo } = useFilter();

  const center_cities: Record<string, { latitude: number; longitude: number }> =
    useMemo(() => {
      return rjGson.features.reduce((acc, cur) => {
        const center = turf.center(cur.geometry).geometry.coordinates;
        return {
          ...acc,
          [cur.properties.name]: { latitude: center[1], longitude: center[0] }
        };
      }, {});
    }, []);

  useEffect(() => {
    const res = async () => {
      await d3
        .csv(
          'https://raw.githubusercontent.com/preciousakura/visualizacao-simba-webapp/master/src/data/simba.csv'
        )
        .then((res) => {
          const dataFormatted: Data[] = res.map((d, i) => {
            const df = d['Data/Hora']?.split(' ')[0].split('/')[2];
            const c = d['Cidade'] as string;
            const lat = center_cities[c] ? center_cities[c].latitude : 0;
            const long = center_cities[c] ? center_cities[c].longitude : 0;
            return {
              condicao: d['Condição'] as string,
              data: df,
              estagio: d['Estágio de desenvolvimento'] as string,
              ameacada:
                d['Espécie ameaçada'] === ''
                  ? 'Não informado'
                  : (d['Espécie ameaçada'] as string),
              sexo:
                d['OFAI - Sexo'] === ''
                  ? 'Não informado'
                  : (d['OFAI - Sexo'] as string),
              classe:
                d['Espécies - Classe'] === ''
                  ? 'Não informado'
                  : (d['Espécies - Classe'] as string),
              ordem:
                d['Espécies - Ordem'] === ''
                  ? 'Não informado'
                  : (d['Espécies - Ordem'] as string),
              especie:
                d['Espécies - Espécie'] === ''
                  ? 'Não informado'
                  : (d['Espécies - Espécie'] as string),
              subordem:
                d['Espécies - Subordem'] === ''
                  ? 'Não informado'
                  : d['Espécies - Subordem'] === ''
                  ? 'Não informado'
                  : (d['Espécies - Subordem'] as string),
              familia:
                d['Espécies - Família'] === ''
                  ? 'Não informado'
                  : (d['Espécies - Família'] as string),
              genero:
                d['Espécies - Gênero'] === ''
                  ? 'Não informado'
                  : (d['Espécies - Gênero'] as string),
              municipio: d['Cidade'] as string,
              id: d['Identificador da ocorrência'] as string,
              latitude: lat,
              longitude: long
            };
          });
          const d = { table: dataFormatted };
          setData(d);
          setFilterData(d);
        });
    };
    res();
  }, []);

  useEffect(() => {
    const d = filterData.table.filter(
      (d) =>
        (city ? d.municipio.toLowerCase() === city?.toLowerCase() : true) &&
        (condicao
          ? d.condicao.toLowerCase() === condicao?.toLowerCase()
          : true) &&
        (ameaca ? d.ameacada.toLowerCase() === ameaca?.toLowerCase() : true) &&
        (sexo ? d.sexo.toLowerCase() === sexo?.toLowerCase() : true) &&
        (estagio ? d.estagio.toLowerCase() === estagio?.toLowerCase() : true)
    );
    setData({ table: d });
  }, [city, condicao, ameaca, estagio, sexo]);

  console.log(data);

  return (
    <DataContext.Provider
      value={{
        data
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
