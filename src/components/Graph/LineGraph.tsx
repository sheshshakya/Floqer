import { Data } from "../../common/fetchData";
import AverageSalaryGraph from "./AverageSalaryGraph";
import TotalJobsGraph from "./TotalJobsGraph";

export interface GraphProps {
  data: Data[];
}

const LineGraph: React.FC<GraphProps> = ({ data }) => {
  return (
    <>
      <h6 className="text-success m-5">Task 2: Analytics</h6>
      <div className="m-5">
        <AverageSalaryGraph data={data} />
      </div>
      <div className="m-5">
        <TotalJobsGraph data={data} />
      </div>
    </>
  );
};

export default LineGraph;
