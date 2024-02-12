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
    /* ,YAxis */
} from 'recharts';

let week = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
const dayOfWeekTickFormatter = (tick) => {
    var weekday = undefined;
    weekday = week[tick - 1];
    return weekday;
    //just give the day (monday, thusday)
};
const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label" style={{ color: 'white' }}>{` ${payload[0].value} min`}</p>
                {/*  <p className="desc">Anything you want can be displayed here.</p> */}
            </div>
        );
    }
    return null;
};

export default function AverageSessions_chart(props) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={300}
                height={100}
                data={props.data}
                margin={{
                    top: 100,
                    right: 0,
                    left: 0,
                    bottom: 20
                }}
                /* style={{ backgroundColor: '#FF0000' }} */
                opacity={0.7}
            >             
                <XAxis
                    dataKey={props.x_axis}
                    /* allowDataOverflow={true} */ padding={{ left: 14, right: 15 }}
                    axisLine={false}
                    tickFormatter={dayOfWeekTickFormatter}
                    stroke="#FFFFFF"
                />
                {/* <YAxis dataKey={props.Y_axis} /> */}
                <Tooltip content={<CustomTooltip />} cursor={false} opacity={0.7} />
                <Line
                    type="monotone"
                    dataKey={props.data1}
                    stroke="#FFFFFF"
                    strokeWidth={3}
                    dot={false}
                />
                <text
                    x="15%"
                    y="15%"
                    style={{ fontSize: '15', fontWeight: '500', fill: '#FFFFFF' }}>
                    Durée moyenne des
                </text>
                <text
                    x="15%"
                    y="25%"
                    style={{ fontSize: '15', fontWeight: '500', fill: '#FFFFFF'}}>
                    sessions
                </text>                
            </LineChart>
        </ResponsiveContainer>
    );
}
