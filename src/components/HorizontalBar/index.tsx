import { VegaLite, VisualizationSpec } from 'react-vega';
import { useBoxWidth } from '../../hooks/useBoxWidth';
import { useData } from '../../hooks/useData';

interface HorizontalBarProps {
  x: any;
  y: any;
  title: string;
  tooltip?: any;
}

export function HorizontalBar({ x, y, title, tooltip }: HorizontalBarProps) {
  const { boxRef, width } = useBoxWidth<HTMLDivElement>();
  const { data } = useData();

  const spec: VisualizationSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',

    width: width,
    background: '#F6F6F6',
    height: 400,
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
