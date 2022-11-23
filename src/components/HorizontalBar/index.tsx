import { VegaLite, VisualizationSpec } from 'react-vega';

interface HorizontalBarProps {
    data: any
}

export function HorizontalBar({data}:HorizontalBarProps) {
    const spec: VisualizationSpec =  {
        width: 400,
        height: 200,
        mark: 'bar',
        encoding: {
          x: { field: 'a', type: 'ordinal' },
          y: { field: 'b', type: 'quantitative' },
        },
        data: { name: 'table' }, // note: vega-lite data attribute is a plain object instead of an array
      };

    return <VegaLite data={data} spec={spec} />
}
