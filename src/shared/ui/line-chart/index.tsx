import { ResponsiveLine, Serie, LineProps } from '@nivo/line'

type Props = {
  data: Serie[],
} & LineProps
export const LineChart = ({ data, ...other }: Props) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 30, right: 110, bottom: 30, left: 50 }}
    xScale={{ format: '%Y-%m-%d %H:%M', type: 'time' }}
    yScale={{
      type: 'linear',
      max: 'auto',
      stacked: true,
    }}
    xFormat="time:%Y-%m-%d %H:%M"
    yFormat=" >-.2f"
    curve="monotoneX"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      // tickValues: 'every day',
      tickPadding: 5,
      tickRotation: 0,
      format: '%d.%m',
      legend: 'Time',
      legendOffset: 36,
      legendPosition: 'middle'
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'count',
      legendOffset: -40,
      legendPosition: 'middle'
    }}
    enableGridX={false}
    enableSlices={"x"}
    enableGridY={false}
    colors={{ scheme: 'category10' }}
    pointSize={7}
    pointColor={{ from: 'color', modifiers: [] }}
    pointBorderColor={{ from: 'color', modifiers: [] }}
    pointLabelYOffset={-7}
    enableArea={true}
    useMesh={true}
    legends={[]}

    motionConfig="default"
    {...other}
  />
)
