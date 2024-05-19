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

const AverageSalaryGraph: React.FC<GraphProps> = ({ data }) => {
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
          stroke="#82ca9d"
          dot={{ r: 5, stroke: "green", strokeWidth: 2, fill: "white" }}
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default AverageSalaryGraph;
