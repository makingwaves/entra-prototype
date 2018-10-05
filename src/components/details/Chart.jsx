import React, { Component } from 'react';
import { objectOf, any, func } from "prop-types";
import { MinimapXYFrame } from 'semiotic';
import { curveCardinal } from 'd3-shape';

// CSS
import './Details.scss'
export default class Chart extends Component {
  static propTypes = {
    data: objectOf(any),
    brushFunction: func,
  }

  render() {
    const { data, brushFunction, foo } = this.props;

    const xyFrameSettings = {
      lines: foo ? data.coordinates : data,
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
          xExtent={[undefined, undefined]}
          yExtent={[undefined, undefined]}
          // matte={true}
          margin={{ left: 50, top: 10, bottom: 50, right: 20 }}
          minimap={{
            margin:{ left: 50, top: 10, bottom: 50, right: 20 },
            ...xyFrameSettings,
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
