import { Data } from "../../common/fetchData";
import AverageSalaryGraph from "./SalaryGraph";
import TotalJobsGraph from "./JobsGraph";

export interface GraphProps {
  data: Data[];
}

const LineGraph = ({ data }: GraphProps) => {
  return (
    <>
      <h6 className="m-4 text-success domine-font">Analytics:</h6>
      <div className="m-3">
        <AverageSalaryGraph data={data} />
      </div>
      <div className="m-3">
        <TotalJobsGraph data={data} />
      </div>
    </>
  );
};

export default LineGraph;
