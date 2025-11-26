import React from 'react'
import {LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,Legend,ResponsiveContainer,} from "recharts";

const ReChart = () => {

    const data = [
        { month: "01", order: 1200, earnings: 800, refunded: 1500 },
        { month: "02", order: 1800, earnings: 200, refunded: 400 },
        { month: "03", order: 1000, earnings: 1800, refunded: 1200 },
        { month: "04", order: 1900, earnings: 2400, refunded: 2100 },
        { month: "05", order: 2300, earnings: 1000, refunded: 900 },
        { month: "06", order: 2600, earnings: 800, refunded: 1600 },
        { month: "07", order: 2400, earnings: 1900, refunded: 1700 },
        { month: "08", order: 2500, earnings: 2200, refunded: 1800 },
        { month: "09", order: 1900, earnings: 1400, refunded: 2100 },
        { month: "10", order: 1100, earnings: 500, refunded: 2500 },
        { month: "11", order: 1500, earnings: 2600, refunded: 2000 },
        { month: "12", order: 2000, earnings: 1700, refunded: 1500 },
    ];

    return (
        <div className="w-full h-[400px] bg-white rounded-xl">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <CartesianGrid stroke="#ffffff20" strokeDasharray="3 3" />
                    <XAxis dataKey="month" stroke="#fff" />
                    <YAxis stroke="#fff" />
                    <Tooltip
                        contentStyle={{ backgroundColor: "#111", border: "none" }}
                        labelStyle={{ color: "#fff" }}
                        itemStyle={{ color: "#fff" }}
                    />
                    <Legend wrapperStyle={{ color: "white" }} />

                    <Line
                        type="monotone"
                        dataKey="order"
                        stroke="#30D5C8"
                        strokeWidth={3}
                        dot={false}
                    />
                    <Line
                        type="monotone"
                        dataKey="earnings"
                        stroke="#FF8C32"
                        strokeWidth={3}
                        dot={false}
                    />
                    <Line
                        type="monotone"
                        dataKey="refunded"
                        stroke="#0066FF"
                        strokeWidth={3}
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ReChart
