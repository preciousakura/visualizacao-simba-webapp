import { Vega, VisualizationSpec } from 'react-vega';
import { useBoxWidth } from '../../hooks/useBoxWidth';
import { useData } from '../../hooks/useData';

interface LineChartProps {
  color?: any;
  tooltip?: any[];
  title?: string;
}

export function LineChart({ color, tooltip, title }: LineChartProps) {
  const { boxRef, width } = useBoxWidth<HTMLDivElement>();
  const { data } = useData();

  const spec: VisualizationSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    data: { name: 'table' },
    width: width,
    height: 200,
    background: '#F6F6F6',
    title: title,
    mark: {
      type: 'line',
      point: true
    },

    encoding: {
      x: {
        timeUnit: 'year',
        field: 'data',
        axis: { tickCount: 5, labelFontSize: 16 },
        title: 'Ano'
      },
      y: {
        aggregate: 'count',
        field: 'data',
        type: 'quantitative',
        scale: { domain: [0, 1500] },
        title: null,
        axis: {
          labelFontSize: 16
        }
      },
      color,
      tooltip: tooltip
    }
  };

  return (
    <div ref={boxRef}>
      <Vega data={data} spec={spec} />
    </div>
  );
}
