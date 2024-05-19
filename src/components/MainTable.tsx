import fetchData from "../common/fetchData";
import { useEffect, useState } from "react";
import LineGraph from "./Graph/LineGraph";
import _ from "lodash";
import Table from "./Table/Table";

const MainTable = () => {
  const { data, setData, loading, error } = fetchData();
  const columns = [
    { path: "year", label: "Year" },
    { path: "totalJobs", label: "Total Jobs" },
    { path: "averageSalary", label: "Average Salary in USD" },
  ];
  const [sortColumn, setSortColumn] = useState({ path: "year", order: "asc" });

  useEffect(() => {
    const sorted = _.orderBy(
      data,
      [sortColumn.path],
      [sortColumn.order as "asc" | "desc"]
    );
    setData(sorted);
  }, [sortColumn, setSortColumn]);

  if (loading) return <div className="spinner-border text-success m-4"></div>;
  if (error) return <div className="text-danger">{error}</div>;

  return (
    <>
      <h6 className="m-4 text-success nav-font">Task 1: Basic Table</h6>
      <Table
        columns={columns}
        sortColumn={sortColumn}
        setSortColumn={setSortColumn}
        data={data}
      />
      <LineGraph data={data} />
    </>
  );
};

export default MainTable;
