import React from "react";
import { ResponsiveLine } from '@nivo/line'


const styles = {
  divCard: {
    height: "60vh",
  },
  chsButtons: {
    borderRadius: "0px",
  },
};

export default function AddFilm() {
  return (
    <div className="card" style={styles.divCard}>
          <ResponsiveLine
        data={dataset}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        yFormat=" >-.2f"
        curve="catmullRom"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        colors={{ scheme: 'red_yellow_blue' }}
        pointSize={10}
        pointColor={{ from: 'color', modifiers: [] }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        areaOpacity={0.4}
        crosshairType="x"
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 91,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    </div>
  );
}

const dataset = [
  {
    "id": "japan",
    "color": "hsl(55, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 102
      },
      {
        "x": "helicopter",
        "y": 296
      },
      {
        "x": "boat",
        "y": 211
      },
      {
        "x": "train",
        "y": 47
      },
      {
        "x": "subway",
        "y": 31
      },
      {
        "x": "bus",
        "y": 35
      },
      {
        "x": "car",
        "y": 70
      },
      {
        "x": "moto",
        "y": 11
      },
      {
        "x": "bicycle",
        "y": 89
      },
      {
        "x": "horse",
        "y": 104
      },
      {
        "x": "skateboard",
        "y": 286
      },
      {
        "x": "others",
        "y": 217
      }
    ]
  },
  {
    "id": "france",
    "color": "hsl(243, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 242
      },
      {
        "x": "helicopter",
        "y": 101
      },
      {
        "x": "boat",
        "y": 102
      },
      {
        "x": "train",
        "y": 213
      },
      {
        "x": "subway",
        "y": 45
      },
      {
        "x": "bus",
        "y": 174
      },
      {
        "x": "car",
        "y": 193
      },
      {
        "x": "moto",
        "y": 253
      },
      {
        "x": "bicycle",
        "y": 51
      },
      {
        "x": "horse",
        "y": 131
      },
      {
        "x": "skateboard",
        "y": 148
      },
      {
        "x": "others",
        "y": 289
      }
    ]
  },
  {
    "id": "us",
    "color": "hsl(79, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 98
      },
      {
        "x": "helicopter",
        "y": 173
      },
      {
        "x": "boat",
        "y": 133
      },
      {
        "x": "train",
        "y": 183
      },
      {
        "x": "subway",
        "y": 85
      },
      {
        "x": "bus",
        "y": 148
      },
      {
        "x": "car",
        "y": 60
      },
      {
        "x": "moto",
        "y": 46
      },
      {
        "x": "bicycle",
        "y": 98
      },
      {
        "x": "horse",
        "y": 33
      },
      {
        "x": "skateboard",
        "y": 195
      },
      {
        "x": "others",
        "y": 124
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(173, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 254
      },
      {
        "x": "helicopter",
        "y": 274
      },
      {
        "x": "boat",
        "y": 121
      },
      {
        "x": "train",
        "y": 265
      },
      {
        "x": "subway",
        "y": 224
      },
      {
        "x": "bus",
        "y": 27
      },
      {
        "x": "car",
        "y": 111
      },
      {
        "x": "moto",
        "y": 280
      },
      {
        "x": "bicycle",
        "y": 182
      },
      {
        "x": "horse",
        "y": 207
      },
      {
        "x": "skateboard",
        "y": 17
      },
      {
        "x": "others",
        "y": 62
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(27, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 234
      },
      {
        "x": "helicopter",
        "y": 6
      },
      {
        "x": "boat",
        "y": 275
      },
      {
        "x": "train",
        "y": 33
      },
      {
        "x": "subway",
        "y": 271
      },
      {
        "x": "bus",
        "y": 268
      },
      {
        "x": "car",
        "y": 165
      },
      {
        "x": "moto",
        "y": 25
      },
      {
        "x": "bicycle",
        "y": 69
      },
      {
        "x": "horse",
        "y": 155
      },
      {
        "x": "skateboard",
        "y": 292
      },
      {
        "x": "others",
        "y": 50
      }
    ]
  }
];