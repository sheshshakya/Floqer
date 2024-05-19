import { useParams } from "react-router-dom";
import fetchData from "../common/fetchData";

interface stringNumberMap {
  [key: string]: number;
}

const JobTitleTable = () => {
  const { year } = useParams();
  const { allData } = fetchData();
  const filteredData = allData.filter((data) => data.work_year === year);
  const finalResult: stringNumberMap = {};
  for (let data of filteredData) {
    if (!finalResult[data.job_title]) finalResult[data.job_title] = 0;
    finalResult[data.job_title] += 1;
  }
  const columns = ["Job Titles", "No. of Jobs"]
  return (
    <div className="m-5">
      <h6 className="nav-font text-success">For year {year}</h6>
      <table className="table table-light table-bordered mt-3">
      <thead>
        <tr style={{ cursor: "pointer" }}>
          {columns.map((column) => (
            <th key={column}>
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.entries(finalResult).map(([key, value]) => (
          <tr key={key.toString()}>
            <td>{key}</td>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default JobTitleTable;
