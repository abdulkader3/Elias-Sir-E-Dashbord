"use client"
import React from "react";
import {
BarChart,
Bar,
XAxis,
ResponsiveContainer,
Tooltip,
} from "recharts";

const ReChart02 = () => {
    const data = [
{ name: "1", value: 20 },
{ name: "2", value: 40 },
{ name: "3", value: 30 },
{ name: "4", value: 60 },
{ name: "5", value: 80 },
{ name: "6", value: 55 },
{ name: "7", value: 35 },
];
    return (
        <>

            <div className="w-full h-[250px] p-4 rounded-xl">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} barGap={40}>
                        <defs>
                            <linearGradient id="barColor" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#7A5AF8" />
                                <stop offset="100%" stopColor="#6C47F5" />
                            </linearGradient>
                        </defs>


                        <XAxis dataKey="name" hide />
                        <Tooltip cursor={false} contentStyle={{ background: "#111", border: "none", color: "#fff" }} />


                        <Bar
                            dataKey="value"
                            fill="url(#barColor)"
                            radius={[50, 50, 50, 50]} // FULL ROUNDED TOP & BOTTOM
                            background={{ fill: "#E9ECF5", radius: 50 }}
                            barSize={28}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>

        </>
    )
}

export default ReChart02
