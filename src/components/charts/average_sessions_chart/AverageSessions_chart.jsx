import React /* PureComponent */ from 'react';
import {
    LineChart,
    Line,
    XAxis,
    /* YAxis,
    CartesianGrid, */
    Tooltip,
    /* Legend, */
    ResponsiveContainer
} from 'recharts';

let week = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
const dayOfWeekTickFormatter = (tick) => {
    var weekday = undefined;
    weekday = week[tick - 1];
    return weekday;
    //just give the day (monday, thusday)
};

export default function AverageSessions_chart(props) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={300}
                height={100}
                data={props.data}
                margin={{
                    top: 20,
                    right: 0,
                    left: 0,
                    bottom: 20
                }}
                /* style={{ backgroundColor: '#FF0000' }} */
            >
                <XAxis
                    dataKey={props.x_axis}
                    /* allowDataOverflow={true} */ padding={{ left: 14, right: 15 }}
                    axisLine={false}
                    tickFormatter={dayOfWeekTickFormatter}
                    stroke="#FFFFFF"
                />
                <Tooltip />
                <Line
                    type="monotone"
                    dataKey={props.data1}
                    stroke="#FFFFFF"
                    strokeWidth={3}
                    dot={false}
                />
            </LineChart>
        </ResponsiveContainer>
    );
}
