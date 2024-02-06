import React from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis } from 'recharts';

const CustomLabel = (props) => {
    console.log(props);
    return (
        <svg x="40%" y="36%">
            <text
                x={props.viewBox.x}
                y={props.viewBox.y}
                fill="#282D30"
                dy={20}
                dx={5}
                fontSize={26}
                fontWeight={700}>
                {`${props.value}%`}
            </text>
            <text
                x={props.viewBox.x}
                y={props.viewBox.y}
                fill="#74798C"
                dy={45}
                dx={0}
                fontSize={16}
                fontWeight={500}>
                de votre
            </text>
            <text
                x={props.viewBox.x}
                y={props.viewBox.y}
                fill="#74798C"
                dy={70}
                dx={0}
                fontSize={16}
                fontWeight={500}>
                objectif
            </text>
            {/*  <foreignObject width={100} height={30}>
                <div>
                    <p>12</p>
                    <p>de votre objectif</p>
                </div>
            </foreignObject> */}
        </svg>
    );
};

export default function TodayScore_chart(props) {
    console.log(props.data);
    const dataTest = [
        {
            uv: 12
        }
    ];
    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="100"
                outerRadius="120"
                barSize={20}
                data={dataTest}
                startAngle={180}
                endAngle={-180}>
                <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                <RadialBar
                    minAngle={15}
                    /* label={(CustomLabel, { position: 'center' })} */
                    label={CustomLabel}
                    /*   label={{
                        position: 'center',
                       
                        formatter: function (value) {
                            return value + '%';
                        }
                    }} */
                    /*  label={{
                        position: 'center',
                        fill: '#282D30',
                        formatter: function (value) {
                            return value + '%';
                        },
                        style: { fontSize: '26px', fontWeight: '700' },
                        offset: '200px'
                    }} */
                    background
                    fill="#FF0000"
                    dataKey="uv"
                    cornerRadius={20 / 2}
                />
                {/* <text
                    x="39%"
                    y="63%"
                    style={{
                        fontSize: 16,
                        fontWeight: '500',
                        fill: '#74798C',
                        fontFamily: 'Roboto',
                        textAlign: 'center'
                    }}>
                    de votre
                </text>
                <text
                    x="39%"
                    y="73%"
                    style={{
                        fontSize: 16,
                        fontWeight: '500',
                        fill: '#74798C',
                        fontFamily: 'Roboto',
                        textAlign: 'center'
                    }}>
                    objectif
                </text> */}

                {/*   <Legend
                    iconSize={10}
                    layout="vertical"
                    verticalAlign="middle"
                    wrapperStyle={style}
                /> */}
            </RadialBarChart>
        </ResponsiveContainer>
    );
}
