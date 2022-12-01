import { VegaLite, VisualizationSpec } from 'react-vega';
import { Data } from 'simba';
import { useBoxWidth } from '../../hooks/useBoxWidth';

interface HorizontalBarProps {
  data: { table: Data[] };
  x: any;
  y: any;
  title: string;
  tooltip?: any;
}

export function HorizontalBar({
  data,
  x,
  y,
  title,
  tooltip
}: HorizontalBarProps) {
  const { boxRef, width } = useBoxWidth<HTMLDivElement>();

  const spec: VisualizationSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    width: width,
    height: 300,
    mark: 'bar',
    encoding: {
      x: x,
      y: y,
      tooltip: tooltip
    },
    title: title,
    usermeta: { embedOptions: { renderer: 'svg' } },
    data: { name: 'table' }
  };

  return (
    <div ref={boxRef}>
      <VegaLite data={data} spec={spec} />
    </div>
  );
}
