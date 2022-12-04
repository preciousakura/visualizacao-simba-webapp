import { VegaLite, VisualizationSpec } from 'react-vega';
import { useBoxWidth } from '../../hooks/useBoxWidth';
import { useData } from '../../hooks/useData';

interface HorizontalBarProps {
  x: any;
  y: any;
  title: string;
  tooltip?: any;
  height?: number;
}

export function HorizontalBar({
  x,
  y,
  title,
  tooltip,
  height = 400
}: HorizontalBarProps) {
  const { boxRef, width } = useBoxWidth<HTMLDivElement>();
  const { data } = useData();

  const spec: VisualizationSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',

    width: width - 250,
    background: '#effafc',
    height: height,
    mark: 'bar',
    encoding: {
      x: {
        ...x,
        axis: {
          labelFontSize: 16
        }
      },
      y: {
        ...y,
        axis: {
          labelFontSize: 16
        }
      },
      color: { value: '#0B5890' },
      tooltip: tooltip
    },
    title: { text: title, fontSize: 16 },
    usermeta: { embedOptions: { renderer: 'svg' } },
    data: { name: 'table' }
  };

  return (
    <div ref={boxRef}>
      <VegaLite data={data} spec={spec} />
    </div>
  );
}
