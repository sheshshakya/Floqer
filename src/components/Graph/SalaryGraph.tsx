import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { GraphProps } from "./LineGraph";

const AverageSalaryGraph = ({ data }: GraphProps) => {
  return (
    <ResponsiveContainer width="90%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="averageSalary"
          stroke="#4fad72"
          dot={{ r: 5, stroke: "green", strokeWidth: 1, fill: "green" }}
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default AverageSalaryGraph;
