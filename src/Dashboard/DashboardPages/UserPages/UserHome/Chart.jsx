/* eslint-disable react/prop-types */
import { PieChart, Pie, Sector, Cell, ResponsiveContainer ,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend, } from "recharts";



const COLORS = ["rgba(255, 255, 255, 0)", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};



const CustomTooltip = ({ active, payload }) => {
    
  if (active ) {
    return (
      <div className="custom-tooltip shadow-[0_0_65px_cyan] backdrop-blur-sm bg-black/50 rounded-md p-5">
        <p className="intro">{payload[0]?.name}</p>
        <p className="desc bg-white text-black px-2 rounded-lg">
          {payload[0].value} Contests
        </p>
      </div>
    );
  }

  return null;
};


const Chart = ({ chartData }) => {

    console.log(chartData);

  return (
    <div className="bg-black/50  h-96 px-2 shadow-[0_0_40px_cyan] rounded-xl pt-10 backdrop-blur-sm max-w-96">
      <h1 className="text-3xl font-bold font-nova text-center">
        Winning Ratio{" "}
      </h1>

      {!chartData[1].value && (
        <p className="text-red-500 text-center">
          You have to win at-least 1 contest. <br /> Then it will show the ratio
          perfectly.
        </p>
      )}

      <PieChart width={300} height={300}>
        <Pie
          className="cursor-pointer"
          data={chartData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        <Legend />
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </div>
  );
};

export default Chart;



