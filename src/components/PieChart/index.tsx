import { Vega, VisualizationSpec } from 'react-vega';
import { useBoxWidth } from '../../hooks/useBoxWidth';
import { useData } from '../../hooks/useData';

interface PieChartProps {
  aggregate?: any;
  window?: any;
  calculate?: any;
  color?: any;
  tooltip?: any[];
}

export function PieChart({
  aggregate,
  window,
  calculate,
  color,
  tooltip
}: PieChartProps) {
  const { boxRef, width } = useBoxWidth<HTMLDivElement>();
  const { data } = useData();
  const spec: VisualizationSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    data: { name: 'table' },
    width: width - 50,
    height: 300,
    background: '#effafc',
    padding: { top: 24, right: 24, bottom: 24, left: 24 },
    transform: [aggregate, window, calculate],

    encoding: {
      theta: { field: 'Porcentagem', type: 'quantitative', stack: true },
      color,
      tooltip: tooltip
    },

    layer: [
      {
        mark: { type: 'arc', outerRadius: 120 }
      },
      {
        mark: { type: 'text', radius: 140 },
        encoding: {
          text: { field: 'Porcentagem', type: 'quantitative', format: '.2%' }
        }
      }
    ]
  };

  return (
    <div ref={boxRef}>
      <Vega data={data} spec={spec} />
    </div>
  );
}
