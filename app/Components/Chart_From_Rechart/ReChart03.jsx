'use client'
import React from 'react'
import { PieChart, Pie, Cell } from 'recharts';



const ReChart03 = () => {

    const data = [
        { name: 'A', value: 25 },
        { name: 'B', value: 25 },
        { name: 'C', value: 25 },
        { name: 'D', value: 25 },
    ];

    const COLORS = ['#EA4C89', '#F43F5E', '#FDE047', '#6366F1'];

    return (
        <>

            <div className="flex items-center justify-center w-full h-full p-4">
                <div className="relative">
                    <PieChart width={200} height={200}>
                        <Pie
                            data={data}
                            cx={100}
                            cy={100}
                            innerRadius={70}
                            outerRadius={90}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                    <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-700">
                        52%
                    </div>
                </div>
            </div>

        </>
    )
}

export default ReChart03
