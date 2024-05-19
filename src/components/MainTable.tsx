import fetchData from "../common/fetchData";
import { useEffect, useState } from "react";
import _ from "lodash";

interface Column {
    path: string;
    label: string;
}

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

  if (loading) return <div className="spinner-border text-success"></div>;
  if (error) return <div className="text-danger">{error}</div>;

  const handleSort = (column: Column) => {
    if (column.path === sortColumn.path)
      setSortColumn({
        ...sortColumn,
        order: sortColumn.order === "asc" ? "desc" : "asc",
      });
    else setSortColumn({ path: column.path, order: "asc" });
  };

  const renderSortIcon = (column: Column) => {
    if(column.path !== sortColumn.path) return null;
    if(sortColumn.order === "asc") return <i className="fa fa-sort-asc"></i>
    else return <i className="fa fa-sort-desc"></i>
  }

  return (
    <table className="table table-light table-bordered mt-3">
      <thead>
        <tr style={{ cursor: "pointer" }}>
          {columns.map((column) => (
            <th key={column.path} onClick={() => handleSort(column)}>
              {column.label} {renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.year}>
            <td>{item.year}</td>
            <td>{item.totalJobs}</td>
            <td>{item.averageSalary.toFixed(3)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MainTable;
