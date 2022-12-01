import { VegaLite, VisualizationSpec } from 'react-vega';
import { useBoxWidth } from '../../hooks/useBoxWidth';
import { useData } from '../../hooks/useData';

interface HorizontalGroupBarProps {}

export function HorizontalGroupBar({}: HorizontalGroupBarProps) {
  const { boxRef, width } = useBoxWidth<HTMLDivElement>();
  const { data } = useData();

  const spec: VisualizationSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    data: { name: 'table' },
    width: width,
    background: '#F6F6F6',
    height: 400,
    mark: 'bar',
    encoding: {
      y: {
        field: 'ordem',
        title: 'Ordem',
        sort: '-x'
      },
      x: {
        aggregate: 'valid',
        field: 'ameacada',
        title: 'Quantidade de Ocorrências'
      },
      color: {
        field: 'ameacada',
        scale: {
          domain: ['Sim', 'Não'],
          range: ['#EDC946', '#77B6B2']
        },
        title: 'ameacada'
      },
      tooltip: [
        { field: 'ordem', title: 'Ordem' },
        { aggregate: 'count', field: 'ordem', title: 'Ocorrências' },
        { field: 'ameacada', title: 'Ameaçada' }
      ]
    },
    title: 'Ordens mais encontradas'
  };

  return (
    <div ref={boxRef}>
      <VegaLite data={data} spec={spec} />
    </div>
  );
}
