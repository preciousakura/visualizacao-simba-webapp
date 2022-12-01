import { PlainObject, VegaLite, VisualizationSpec } from 'react-vega';
import { useBoxWidth } from '../../hooks/useBoxWidth';

interface MapProps {
  data: PlainObject;
}

export function Map({ data }: MapProps) {
  const { boxRef, width } = useBoxWidth<HTMLDivElement>();

  const spec: VisualizationSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    width: width,
    height: 1000,
    autosize: {
      type: 'fit',
      contains: 'padding'
    },
    layer: [
      {
        data: {
          url: 'https://raw.githubusercontent.com/preciousakura/visualizacao-simba-webapp/master/src/data/rj_topojson.json',
          format: {
            type: 'topojson',
            feature: 'rio_jn'
          }
        },
        projection: {
          type: 'mercator',
          center: [0, 0]
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
        // transform: [
        //   {
        //     aggregate: [
        //       {
        //         op: 'count',
        //         field: 'municipio',
        //         as: 'city'
        //       }
        //     ],
        //     groupby: ['cidade']
        //   }
        // ],
        projection: {
          type: 'mercator',
          center: [0, 0]
        },
        mark: 'circle',
        encoding: {
          // size: {
          //   field: 'city',
          //   type: 'quantitative',
          //   scale: { domain: [0, 1000], range: [100, 500] }
          // },
          size: { value: 150 },
          longitude: {
            field: 'longitude'
          },
          latitude: {
            field: 'latitude'
          },
          color: { value: 'steelblue' },

          tooltip: [
            {
              field: 'municipio',
              type: 'nominal'
            }
          ]
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
