import { PlainObject, VegaLite, VisualizationSpec } from 'react-vega';
import { useBoxWidth } from '../../hooks/useBoxWidth';

interface MapProps {
  data: PlainObject;
}

export function Map({ data }: MapProps) {
  const { boxRef, width } = useBoxWidth<HTMLDivElement>();
  console.log(data);

  const spec: VisualizationSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    width: width,
    height: 300,
    layer: [
      {
        data: {
          url: 'counties',
          format: {
            type: 'topojson',
            feature: 'rio_jn'
          }
        },
        projection: {
          type: 'mercator'
        },
        mark: {
          type: 'geoshape',
          fill: 'lightgray',
          stroke: 'white'
        }
      },
      {
        data: {
          name: 'table'
        },
        projection: {
          type: 'mercator'
        },
        mark: 'circle',
        encoding: {
          longitude: {
            field: 'longitude',
            type: 'quantitative'
          },
          latitude: {
            field: 'latitude',
            type: 'quantitative'
          },
          size: { value: 10 },
          color: { value: 'steelblue' }
        }
      }
    ]
  };
  return (
    <div ref={boxRef}>
      <VegaLite data={data} spec={spec} />
    </div>
  );
}
