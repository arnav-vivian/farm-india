import React from 'react'
import {PieChart, Pie, Tooltip} from "recharts";
function RoundChart() {
    const data=[
        
           {name:"wheat", value:4}, 
           {name:"rice", value:3}, 
           {name:"barley", value:1}, 
           {name:"jute",value:2}
        //    {name:"may", value:35337478}, 
        //    {name:"june", value:2364499}, 
        //    {name:"july", value:948765}, 
        //    {name:"august", value:674849}, 

    ]
  return (
    //is pie chart m we can show which crop is grown for how many months like uske basis p dikga diviosn
    <div >
    <h4><center>Crop Duration in Months</center></h4>
    <PieChart width={300} height={300}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#AAC8A7"
            label
          />
          
          <Tooltip />
        </PieChart>

    </div>
  )
}

export default RoundChart