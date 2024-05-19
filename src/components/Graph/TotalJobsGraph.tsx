import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { GraphProps } from './LineGraph';


const TotalJobsGraph: React.FC<GraphProps> = ({ data }) => {
    return (
      <ResponsiveContainer width="90%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="totalJobs" stroke="#9a7fe1" activeDot={{ r: 8 }} strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    );
  };
  
  export default TotalJobsGraph;
  