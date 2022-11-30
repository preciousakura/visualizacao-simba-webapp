import { VegaLite, VisualizationSpec } from 'react-vega';

interface HorizontalBarProps {
  data: any;
}

export function HorizontalBar({ data }: HorizontalBarProps) {
  const spec: VisualizationSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    width: 500,
    height: 50,
    data: { name: 'table' }, // note: vega-lite data attribute is a plain object instead of an array
    mark: 'bar',
    encoding: {
      x: {
        aggregate: 'count',
        field: 'Identificador da ocorrencia',
        //field: 'precipitation',
        //type: 'Quantitative',
        title: 'Quantidade de Ocorrências'
      },
      y: {
        field: 'Classe',
        //field: "weather",
        //type: 'Nominal',
        title: 'Classe',
        sort: '-x'
      },
      tooltip: [
        { field: 'Classe', title: 'Classe' },
        { aggregate: 'count', field: 'Classe', title: 'Ocorrências' }
      ]
      //tooltip: [{field: "weather", title: "Classe"}, {aggregate: "count", field: "precipitation", title: "Ocorrências"}]
    },
    title: 'Classes mais encontradas',
    usermeta: { embedOptions: { renderer: 'svg' } }
  };

  return <VegaLite data={data} spec={spec} />;
}
