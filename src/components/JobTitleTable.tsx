import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchData from "../common/fetchData";
import TableHead from "./Table/TableHead";
import _ from "lodash";

interface StringNumberMap {
  [key: string]: number;
}
interface JobCount {
  job_title: string;
  no_of_jobs: number;
}

const JobTitleTable = () => {
  const { year } = useParams();
  const { allData, loading } = fetchData();
  const columns = [
    { path: "job_title", label: "Job Title" },
    { path: "no_of_jobs", label: "No. of Jobs" },
  ];
  const [sortColumn, setSortColumn] = useState({
    path: "job_title",
    order: "asc",
  });
  const [entries, setEntries] = useState<JobCount[]>([]);

  useEffect(() => {
    const filteredData = allData.filter((data) => data.work_year === year);
    const finalResult: StringNumberMap = {};
    for (let data of filteredData) {
      if (!finalResult[data.job_title]) finalResult[data.job_title] = 0;
      finalResult[data.job_title] += 1;
    }
    let resultArray: JobCount[] = Object.entries(finalResult).map(
      ([job_title, no_of_jobs]) => ({
        job_title,
        no_of_jobs,
      })
    );
    resultArray = _.orderBy(resultArray, [sortColumn.path], [sortColumn.order as "asc" | "desc"]);
    setEntries(resultArray);
  }, [allData, year]);

  useEffect(() => {
    const sorted = _.orderBy(entries, [sortColumn.path], [sortColumn.order as "asc" | "desc"])
    setEntries(sorted)
  }, [sortColumn, setSortColumn])

  if (loading) return <div className="spinner-border text-success m-4"></div>;
  return (
    <div className="m-5 table-container">
      <h6 className="domine-font text-success">For year {year}</h6>
      <table className="table table-light table-bordered mt-3 domine-font">
        <TableHead
          columns={columns}
          sortColumn={sortColumn}
          setSortColumn={setSortColumn}
        />
        <tbody>
          {entries.map(entry => (
            <tr key={entry.job_title}>
                <td>{entry.job_title}</td>
                <td>{entry.no_of_jobs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobTitleTable;
