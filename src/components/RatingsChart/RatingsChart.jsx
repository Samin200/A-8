import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";




export default function RatingsChart({Ratings}) {
  const data = [...Ratings]
  return (
    <div className=" " style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart 
          data={data.reverse()}
          layout="vertical"
          margin={{  }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" width={50} />
          <Tooltip />
          <Bar dataKey="count" fill="#f38b1c" radius={[0, 5, 5, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}