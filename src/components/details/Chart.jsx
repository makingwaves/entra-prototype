import React, { Component } from 'react';
import { objectOf, arrayOf, any, func } from "prop-types";
import { MinimapXYFrame } from 'semiotic';
import { curveCardinal } from 'd3-shape';

// CSS
import './Details.scss'
export default class Chart extends Component {
  static propTypes = {
    filteredData: arrayOf(any),
    initialData: objectOf(any),
    brushFunction: func,
  }

  render() {
    const { allCoordinates, currentCoordinates, data, brushFunction, isDefaultMinimap } = this.props;

    const xyFrameSettings = {
      lines: currentCoordinates,
      lineType:{ type: "line", interpolator: curveCardinal },
      xAccessor: "date",
      yAccessor: "actual_value",
      lineStyle:{ stroke: "#007190", strokeWidth: 2 },
      showLinePoints: true,
      pointStyle:{ fill: "#00a2ce" },
      hoverAnnotation: true,
      axes:[
        {
          orient: "left",
          baseline: false
        },
        {
          orient: "bottom",
          baseline: false,
          ticks: 6
        }
      ]
    }

    return (
          <MinimapXYFrame
          size={[600, 600]}
          {...xyFrameSettings}
          tooltipContent={d => (
            <div className="tooltip-content">
              <p>{Math.floor(data.avg)} {data.display_name_short}</p>
              <p></p>
            </div>
          )}
          // matte={true}
          label= { d => <text transform="rotate(45d)">{d}</text>}
          margin={{ left: 50, top: 10, bottom: 50, right: 20 }}
          //renderKey={d => d.date}
          minimap={{
            margin:{ left: 50, top: 10, bottom: 50, right: 20 },
            ...xyFrameSettings,
            lines: allCoordinates,
            showLinePoints: false,
            brushEnd: brushFunction,
            // xBrushExtent: extent,
            yBrushable: false,
            axes:[
              {
                baseline: false
              },
              {
                baseline: false
              }
            ],
            size: [600, 150]
          }}
          />
    );
  }
}
