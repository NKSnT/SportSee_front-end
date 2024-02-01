import React /* PureComponent */ from 'react';
import {
    BarChart,
    Bar,
    /*     Rectangle, */
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';

const dayTickFormatter = (tick) => {
    const date = new Date(tick);

    return date.getDate();
    //just give the day (monday, thusday)
};
export default function Activity_chart(props) {
    //console.log(props.data[0]);
    //console.log(props.x_axis);

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={300}
                data={props.data} //data <= ex const data =[{},{}]
                barCategoryGap={35}
                barGap={15}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}>
                <text
                    x="10%"
                    y="10%"
                    dy={+12}
                    style={{
                        fontSize: 15,
                        fontWeight: '500',
                        fill: '#20253A',
                        fontFamily: 'Roboto'
                    }}
                    width={200}
                    scaleToFit={true}
                    textAnchor="middle"
                    verticalAnchor="middle">
                    Activité quotidienne
                </text>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    /* dataKey={props.data} */ dataKey={props.x_axis}
                    tickFormatter={dayTickFormatter}
                />
                <XAxis
                    dataKey={props.x_axis}
                    axisLine={false}
                    tickLine={false}
                    interval={0}
                    height={1}
                    scale="band"
                />
                <YAxis />
                <Tooltip />
                <Legend
                    iconType="circle"
                    align="right"
                    width={200}
                    height={60}
                    verticalAlign="top"
                />
                <Bar
                    dataKey={props.data1} //caption label
                    radius={[20, 20, 0, 0]} // make edge round
                    fill="#282D30" //color first bare
                    /*  activeBar={<Rectangle stroke="blue" />} //on hover */
                />
                <Bar dataKey={props.data2} radius={[20, 20, 0, 0]} fill="#E60000" />
            </BarChart>
        </ResponsiveContainer>
    );
}

/* export default class Example extends PureComponent {
    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={data} //data <= ex const data =[{},{}]
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar
                        dataKey="pv" //caption label
                        fill="#8884d8" //color first bare
                        activeBar={<Rectangle fill="pink" stroke="blue" />} //on hover
                    />
                    <Bar
                        dataKey="uv"
                        fill="#82ca9d"
                        activeBar={<Rectangle fill="gold" stroke="purple" />}
                    />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}
 */
