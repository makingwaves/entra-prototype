import React, { Component } from 'react';
import { objectOf, arrayOf, any, func } from "prop-types";
import { MinimapXYFrame } from 'semiotic';
import { curveCardinal } from 'd3-shape';

// CSS
import './Details.scss'
export default class Chart extends Component {
  static propTypes = {
    data: arrayOf(any),
    fullData: objectOf(any),
    brushFunction: func,
  }

  render() {
    const { data, fullData, brushFunction } = this.props;

    const xyFrameSettings = {
      lines: data ? data : fullData,
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
          label= { date => <text transform="rotate(45deg)">{date}</text>}
          margin={{ left: 50, top: 10, bottom: 50, right: 20 }}
          // renderKey={data => data.date}
          minimap={{
            margin:{ left: 50, top: 10, bottom: 50, right: 20 },
            ...xyFrameSettings,
            lines: fullData,
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
