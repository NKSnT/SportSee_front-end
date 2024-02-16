import React from 'react';
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    /*  PolarRadiusAxis, */
    ResponsiveContainer
} from 'recharts';

export default function ActivityType_chart(props) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart
                cx="50%"
                cy="50%"
                outerRadius="70%"
                startAngle={30}
                endAngle={-330}
                data={props.data}
                margin={{
                    top: 10,
                    right: 10,
                    left: 10,
                    bottom: 10
                }}>
                <PolarGrid />
                <PolarAngleAxis
                    dataKey={props.axis1}
                    stroke="#FFFFFF"
                    fontSize={12}                 
                    axisLine={false} 
                />
                {/* <PolarRadiusAxis /> */}
                <Radar                    
                    dataKey={props.data1}                   
                    fill="#FF0101B2"
                    fillOpacity={0.7}
                />
            </RadarChart>
        </ResponsiveContainer>
    );
}
