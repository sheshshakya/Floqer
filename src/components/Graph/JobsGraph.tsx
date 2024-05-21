import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";
import { GraphProps } from "./LineGraph";

const TotalJobsGraph = ({ data }: GraphProps) => {
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
          dataKey="totalJobs"
          stroke="#4D3F70"
          activeDot={{ r: 8 }}
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TotalJobsGraph;
