'use client'
import React from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const ReChart01 = () => {

    const data = [
        { x: 1, a: 20, b: 10, c: 15 },
        { x: 2, a: 40, b: 25, c: 20 },
        { x: 3, a: 70, b: 40, c: 30 },
        { x: 4, a: 30, b: 20, c: 50 },
        { x: 5, a: 60, b: 45, c: 40 },
        { x: 6, a: 55, b: 35, c: 60 },
    ];

    return (
        <>
            <div className="w-full h-full">

                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorA" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#FF6A77" stopOpacity={1} />
                                <stop offset="100%" stopColor="#FF6A77" stopOpacity={0.4} />
                            </linearGradient>
                            <linearGradient id="colorB" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#F2A7FF" stopOpacity={1} />
                                <stop offset="100%" stopColor="#F2A7FF" stopOpacity={0.4} />
                            </linearGradient>
                            <linearGradient id="colorC" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#6EB6FF" stopOpacity={1} />
                                <stop offset="100%" stopColor="#6EB6FF" stopOpacity={0.4} />
                            </linearGradient>
                        </defs>


                        <XAxis dataKey="x" hide />
                        <YAxis hide />
                        <Tooltip contentStyle={{ backgroundColor: "#111", border: "none", color: "#fff" }} />


                        <Area type="linear" dataKey="a" stroke="none" fill="url(#colorA)" />
                        <Area type="linear" dataKey="b" stroke="none" fill="url(#colorB)" />
                        <Area type="linear" dataKey="c" stroke="none" fill="url(#colorC)" />
                    </AreaChart>
                </ResponsiveContainer>
                
            </div>

        </>
    )
}

export default ReChart01
