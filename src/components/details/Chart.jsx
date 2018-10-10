import React, { Component } from 'react';
import { objectOf, arrayOf, any, func } from "prop-types";
import { MinimapXYFrame } from 'semiotic';
import { curveCardinal } from 'd3-shape';
import moment from 'moment';

// CSS
import './Details.scss'
export default class Chart extends Component {
  static propTypes = {
    filteredData: arrayOf(any),
    initialData: objectOf(any),
    brushFunction: func,
  }

  render() {
    const { allCoordinates, currentCoordinates, data, brushFunction } = this.props;

    const xyFrameSettings = {
      lines: currentCoordinates,
      lineType:{ type: "line", interpolator: curveCardinal },
      xAccessor: "date",
      yAccessor: "actual_value",
      lineStyle:{ stroke: "#586F99", strokeWidth: 2 },
      showLinePoints: true,
      hoverAnnotation: true
    }

    return (

          <MinimapXYFrame
          size={[600, 450]}
          {...xyFrameSettings}
          tooltipContent={d => (
            <div className="tooltip-content">
              <p>{moment(d.date).format("LLL")}</p>
              <p>Verdi: {Math.floor(d.actual_value)} {data.display_name_short}</p>
              <p>Avvik: {Math.floor(d.anomaly_score_abs * 100)} %</p>
            </div>
          )}
          pointStyle={ d => ({ fill: d.anomaly_score_abs >= 0.8 ? "#F6A319" : "#009B73", opacity: 0.5 })}
          customPointMark={ ({d}) => <circle r={d.anomaly_score_abs >= 0.8 ? 6 : 3} />}
          axes={[
            {
              orient: "left",
              baseline: false
            },
            {
              orient: "bottom",
              rotate: 45,
              baseline: false,
              tickFormat: d => moment(d.date).format("DD/MM/YYYY"),
            }
          ]}
          margin={{ left: 50, top: 10, bottom: 50, right: 20 }}
          minimap={{
            margin:{ left: 50, top: 10, right: 20 },
            ...xyFrameSettings,
            lines: allCoordinates,
            showLinePoints: false,
            brushEnd: brushFunction,
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
