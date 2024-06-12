"use client"


import { LineChart, Line, ResponsiveContainer, XAxis, YAxis } from "recharts"


import { useRouter, useSearchParams } from "next/navigation"
import { useMemo } from "react"





export default function LineGraph(price_l: any) {

    console.log(price_l['price_l'])
    const price_data = price_l['price_l']


    return (
        <main className="p-10" style={{ width: '100%', height: '100%' }}>

            <p>this is from the line graph</p>

            <ResponsiveContainer width={'100%'} height={'100%'}>
                <LineChart width={500} height={300} data={price_data}>
                    <Line
                        type="monotone"
                        dataKey="price"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />
                    <XAxis dataKey="date" />
                    <YAxis />
                </LineChart>
            </ResponsiveContainer>


        </main>
    )
}