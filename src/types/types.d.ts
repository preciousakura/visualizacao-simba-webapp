declare module 'simba' {
  interface Data {
    condicao: string;
    data?: string;
    estagio: string;
    ameacada: string;
    classe: string;
    ordem: string;
    especie: string;
    subordem: string;
    familia: string;
    sexo: string;
    genero: string;
    municipio: string;
    id: string;
    latitude: number;
    longitude: number;
  }
  interface Node {
    name: string;
    group: number;
    index: number;
    count: number;
  }
  interface Link {
    source: number;
    target: number;
  }
}
