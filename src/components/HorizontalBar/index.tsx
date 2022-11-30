import { VegaLite, VisualizationSpec } from 'react-vega';
import { Data } from 'simba';

interface HorizontalBarProps {
  data: { table: Data[] };
  width: number;
}

export function HorizontalBar({ data, width }: HorizontalBarProps) {
  const spec: VisualizationSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    width: width,
    height: 300,
    mark: 'bar',
    encoding: {
      x: {
        aggregate: 'count',
        field: 'id',
        type: 'quantitative',
        title: 'Quantidade de Ocorrências'
      },
      y: {
        field: 'classe',
        type: 'nominal',
        title: 'Classe',
        sort: '-x'
      },
      tooltip: [
        { field: 'classe', title: 'Classe' },
        { aggregate: 'count', field: 'Classe', title: 'Ocorrências' }
      ]
    },
    title: 'Classes mais encontradas',
    usermeta: { embedOptions: { renderer: 'svg' } },
    data: { name: 'table' }
  };

  return <VegaLite data={data} spec={spec} />;
}
