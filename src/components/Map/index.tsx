import { PlainObject, VegaLite, VisualizationSpec } from 'react-vega';
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
        value: 15900,
        bind: { input: 'range', min: 11400, max: 20600 }
      },
      {
        name: 'translateX',
        value: 760,
        bind: { input: 'range', min: 0, max: 1000 }
      },
      {
        name: 'translateY',
        value: 260,
        bind: { input: 'range', min: -300, max: 180 }
      },
      {
        name: 'shape',
        value: 'line',
        bind: { input: 'radio', options: ['line', 'curve'] }
      },
      {
        name: 'hover',
        value: null,
        on: [
          { events: '@cell:mouseover', update: 'datum' },
          { events: '@cell:mouseout', update: 'null' }
        ]
      },
      {
        name: 'title',
        value: 'Rio de Janeiro',
        update:
          "hover ? hover.name + ' (' + hover.iata + ')' : 'Rio de Janeiro'"
      },
      {
        name: 'cell_stroke',
        value: null,
        on: [
          { events: 'dblclick', update: "cell_stroke ? null : 'brown'" },
          { events: 'mousedown!', update: 'cell_stroke' }
        ]
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
        name: 'table'
        // transform: [
        //   {
        //     type: 'aggregate',
        //     groupby: ['origin'],
        //     fields: ['count'],
        //     ops: ['sum'],
        //     as: ['flights']
        //   }
        // ]
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
        range: [16, 1000]
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
        type: 'symbol',
        from: { data: 'table' },
        encode: {
          enter: {
            size: { scale: 'size', field: 'municipio' },
            fill: { value: 'steelblue' },
            fillOpacity: { value: 0.8 },
            stroke: { value: 'white' },
            strokeWidth: { value: 1.5 }
          },
          update: {
            x: { field: 'x' },
            y: { field: 'y' }
          }
        }
      },
      {
        type: 'text',
        interactive: false,
        encode: {
          enter: {
            x: { value: 895 },
            y: { value: 0 },
            fill: { value: 'black' },
            fontSize: { value: 20 },
            align: { value: 'right' }
          },
          update: {
            text: { signal: 'title' }
          }
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
