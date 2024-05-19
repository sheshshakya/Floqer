import { Data } from "../../common/fetchData";
import AverageSalaryGraph from "./AverageSalaryGraph";
import TotalJobsGraph from "./TotalJobsGraph";

export interface GraphProps {
  data: Data[];
}

const LineGraph = ({ data }: GraphProps) => {
  return (
    <>
      <h6 className="text-success m-5 nav-font">Task 2: Analytics</h6>
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
