import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react';
import { Data } from 'simba';
import * as d3 from 'd3';
import { useFilter } from './useFilter';
import rjTopoJson from '../data/rj_topojson.json';
interface DataContextProviderProps {
  children: ReactNode;
}

interface DataContextDataProps {
  data: { table: Data[]; counties?: any };
}

export const DataContext = createContext({} as DataContextDataProps);

export function DataProvider({ children }: DataContextProviderProps) {
  const [data, setData] = useState<{ table: Data[] }>({ table: [] });
  const [filterData, setFilterData] = useState<{ table: Data[] }>({
    table: []
  });

  const { city, condicao, ameaca, estagio } = useFilter();

  useEffect(() => {
    const res = async () => {
      await d3
        .csv(
          'https://raw.githubusercontent.com/preciousakura/visualizacao-simba-webapp/master/src/data/simba.csv'
        )
        .then((res) => {
          const dataFormatted: Data[] = res.map((d, i) => {
            const df = d['Data/Hora']?.split(' ')[0];
            return {
              condicao: d['Condição'] as string,
              data: df,
              estagio: d['Estágio de desenvolvimento'] as string,
              ameacada: d['Espécie ameaçada'] as string,
              classe: d['OFAI - Classe do indivíduo'] as string,
              ordem: d['OFAI - Ordem do indivíduo'] as string,
              subordem: d['OFAI - Subordem do indivíduo'] as string,
              familia: d['OFAI - Família do indivíduo'] as string,
              genero: d['OFAI - Sexo'] as string,
              municipio: d['Cidade'] as string,
              id: d['Identificador da ocorrência'] as string,
              latitude: Number(d['Ponto - Lat']?.replaceAll(',', '.')),
              longitude: Number(d['Ponto - Long']?.replaceAll(',', '.'))
            };
          });
          const d = { table: dataFormatted, counties: rjTopoJson };
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
        (estagio ? d.estagio.toLowerCase() === estagio?.toLowerCase() : true)
    );
    setData({ table: d });
    console.log(d);
  }, [city, condicao, ameaca, estagio]);

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
