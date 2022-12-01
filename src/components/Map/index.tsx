import { Vega, VisualizationSpec } from 'react-vega';
import { useBoxWidth } from '../../hooks/useBoxWidth';
import { useData } from '../../hooks/useData';

interface MapProps {}

export function Map({}: MapProps) {
  const { boxRef, width } = useBoxWidth<HTMLDivElement>();
  const { data } = useData();
  const spec: VisualizationSpec = {
    $schema: 'https://vega.github.io/schema/vega/v5.json',
    width: width,
    height: 600,
    padding: { top: 25, left: 0, right: 0, bottom: 0 },
    autosize: 'none',

    signals: [
      {
        name: 'scale',
        value: 20600,
        bind: { input: 'range', min: 20600, max: 40000 }
      },
      {
        name: 'translateX',
        value: 760,
        bind: { input: 'range', min: 0, max: 1000 }
      },
      {
        name: 'translateY',
        value: 10,
        bind: { input: 'range', min: -300, max: 180 }
      }
    ],

    data: [
      {
        name: 'states',
        url: 'https://raw.githubusercontent.com/preciousakura/visualizacao-simba-webapp/master/src/data/rj_topojson.json',
        format: { type: 'topojson', feature: 'rio_jn' },
        transform: [
          {
            type: 'geopath',
            projection: 'projection'
          }
        ]
      },
      {
        name: 'table',
        transform: [
          {
            type: 'aggregate',
            ops: ['count'],
            fields: ['municipio'],
            as: ['Qtde'],
            groupby: ['municipio', 'longitude', 'latitude']
          },
          {
            type: 'geopoint',
            projection: 'projection',
            fields: ['longitude', 'latitude']
          },
          {
            type: 'collect',
            sort: {
              field: 'Qtde',
              order: 'descending'
            }
          }
        ]
      }
    ],
    legends: [
      {
        title: 'Ocorrências',
        orient: 'bottom-right',
        type: 'symbol',
        size: 'size'
      }
    ],

    projections: [
      {
        name: 'projection',
        type: 'mercator',
        scale: { signal: 'scale' },
        translate: [{ signal: 'translateX' }, { signal: 'translateY' }],
        center: [-42.8, -22]
      }
    ],

    scales: [
      {
        name: 'size',
        type: 'linear',
        domain: { data: 'table', field: 'Qtde' },
        range: [500, 2000]
      }
    ],

    marks: [
      {
        type: 'path',
        from: { data: 'states' },
        encode: {
          enter: {
            fill: { value: '#dedede' },
            stroke: { value: 'white' }
          },
          update: {
            path: { field: 'path' }
          }
        }
      },
      {
        name: 'circles',
        type: 'symbol',
        from: { data: 'table' },
        encode: {
          enter: {
            size: { scale: 'size', field: 'Qtde' },
            fill: { value: 'steelblue' },
            fillOpacity: { value: 0.8 },
            stroke: { value: 'white' },
            strokeWidth: { value: 1.5 },
            tooltip: [{ signal: "'Município: ' + datum.municipio" }]
          },
          update: {
            x: { field: 'x' },
            y: { field: 'y' }
          }
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
