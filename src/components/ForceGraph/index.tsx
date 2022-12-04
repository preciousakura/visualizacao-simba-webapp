import { Vega, VisualizationSpec } from 'react-vega';
import { useBoxWidth } from '../../hooks/useBoxWidth';
import { useData } from '../../hooks/useData';

interface ForceGraphProps {}

export function ForceGraph({}: ForceGraphProps) {
  const { boxRef, width } = useBoxWidth<HTMLDivElement>();
  const { graph } = useData();
  console.log('oi', graph);

  const spec: VisualizationSpec = {
    $schema: 'https://vega.github.io/schema/vega/v5.json',
    description:
      'A node-link diagram with force-directed layout, depicting character co-occurrence in the novel Les Misérables.',
    width: width - 100,
    height: 600,
    padding: 0,
    autosize: 'none',

    signals: [
      { name: 'cx', update: 'width / 2' },
      { name: 'cy', update: 'height / 2' },

      {
        name: 'nodeCharge',
        value: -30,
        bind: { input: 'range', min: -100, max: 10, step: 1 }
      },
      {
        name: 'linkDistance',
        value: 10,
        bind: { input: 'range', min: 5, max: 100, step: 1 }
      },

      {
        description: 'State variable for active node fix status.',
        name: 'fix',
        value: false,
        on: [
          {
            events: 'symbol:mouseout[!event.buttons], window:mouseup',
            update: 'false'
          },
          {
            events: 'symbol:mouseover',
            update: 'fix || true'
          },
          {
            events: '[symbol:mousedown, window:mouseup] > window:mousemove!',
            update: 'xy()',
            force: true
          }
        ]
      },
      {
        description: 'Graph node most recently interacted with.',
        name: 'node',
        value: null,
        on: [
          {
            events: 'symbol:mouseover',
            update: 'fix === true ? item() : node'
          }
        ]
      },
      {
        description: 'Flag to restart Force simulation upon data changes.',
        name: 'restart',
        value: false,
        on: [{ events: { signal: 'fix' }, update: 'fix && fix.length' }]
      }
    ],

    data: [
      {
        name: 'nodes_data'
      },
      {
        name: 'links_data'
      }
    ],

    scales: [
      {
        name: 'color',
        type: 'ordinal',
        domain: { data: 'nodes_data', field: 'group' },
        range: { scheme: 'category20' }
      },
      {
        name: 'size',
        type: 'linear',
        domain: { data: 'nodes_data', field: 'count' },
        range: [100, 1000]
      }
    ],

    legends: [
      {
        fill: 'color',
        orient: 'bottom-right',
        title: 'Taxonomia'
      }
    ],

    marks: [
      {
        name: 'nodes',
        type: 'symbol',
        zindex: 1,

        from: { data: 'nodes_data' },
        on: [
          {
            trigger: 'fix',
            modify: 'node',
            values:
              'fix === true ? {fx: node.x, fy: node.y} : {fx: fix[0], fy: fix[1]}'
          },
          {
            trigger: '!fix',
            modify: 'node',
            values: '{fx: null, fy: null}'
          }
        ],

        encode: {
          enter: {
            fill: { scale: 'color', field: 'group' },
            stroke: { value: 'white' }
          },
          update: {
            size: {
              scale: 'size',
              field: 'count'
            },
            cursor: { value: 'pointer' },
            stroke: { value: 'white' },
            strokeWidth: { value: 1 },
            zindex: { value: 0 },
            tooltip: [{ signal: 'datum' }]
          },
          hover: {
            stroke: { value: '#6eb365' },
            strokeWidth: { value: 3 },
            zindex: { value: 1 }
          }
        },

        transform: [
          {
            type: 'force',
            iterations: 50,
            restart: { signal: 'restart' },
            signal: 'force',
            forces: [
              { force: 'center', x: { signal: 'cx' }, y: { signal: 'cy' } },
              { force: 'collide', radius: 15 },
              { force: 'nbody', strength: { signal: 'nodeCharge' } },
              {
                force: 'link',
                links: 'links_data',
                distance: { signal: 'linkDistance' }
              }
            ]
          }
        ]
      },
      {
        type: 'path',
        from: { data: 'links_data' },
        interactive: false,
        encode: {
          update: {
            stroke: { value: '#ccc' },
            strokeWidth: { value: 0.5 }
          }
        },
        transform: [
          {
            type: 'linkpath',
            require: { signal: 'force' },
            shape: 'line',
            sourceX: 'datum.source.x',
            sourceY: 'datum.source.y',
            targetX: 'datum.target.x',
            targetY: 'datum.target.y'
          }
        ]
      }
    ]
  };
  return (
    <div ref={boxRef}>
      <Vega data={graph} spec={spec} />
    </div>
  );
}
