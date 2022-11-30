import { createContext, ReactNode, useContext, useState } from 'react';

interface FilterContextProviderProps {
  children: ReactNode;
}

interface FilterContextDataProps {
  city?: string;
  ameaca?: string;
  condicao?: string;
  estagio?: string;
  onChangeCity: (s: string) => void;
  onChangeAmeaca: (s: string) => void;
  onChangeCondicao: (s: string) => void;
  onChangeEstagio: (s: string) => void;
  erased: () => void;
}

export const FilterContext = createContext({} as FilterContextDataProps);

export function FilterProvider({ children }: FilterContextProviderProps) {
  const [city, setCity] = useState<string>();
  const [ameaca, setAmeaca] = useState<string>();
  const [condicao, setCondicao] = useState<string>();
  const [estagio, setEstagio] = useState<string>();

  const onChangeCity = (city?: string) => {
    setCity(city);
  };

  const onChangeAmeaca = (ameaca?: string) => {
    setAmeaca(ameaca);
  };

  const onChangeCondicao = (condicao?: string) => {
    setCondicao(condicao);
  };

  const onChangeEstagio = (estagio?: string) => {
    setEstagio(estagio);
  };

  const erased = () => {
    setCity(undefined);
    setAmeaca(undefined);
    setCondicao(undefined);
    setEstagio(undefined);
  };

  return (
    <FilterContext.Provider
      value={{
        city,
        ameaca,
        condicao,
        estagio,
        onChangeCity,
        onChangeAmeaca,
        onChangeCondicao,
        onChangeEstagio,
        erased
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  return useContext(FilterContext);
}
