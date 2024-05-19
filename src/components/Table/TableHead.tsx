import { Column, SortColumn } from "./Table";

export interface Props {
  columns: Column[];
  sortColumn: SortColumn;
  setSortColumn: (sortColumn: SortColumn) => void;
}

const TableHead = ({ columns, sortColumn, setSortColumn }: Props) => {
  const handleSort = (column: Column) => {
    if (column.path === sortColumn.path)
      setSortColumn({
        ...sortColumn,
        order: sortColumn.order === "asc" ? "desc" : "asc",
      });
    else setSortColumn({ path: column.path, order: "asc" });
  };

  const renderSortIcon = (column: Column) => {
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc") return <i className="fa fa-sort-asc"></i>;
    else return <i className="fa fa-sort-desc"></i>;
  };

  return (
    <thead>
      <tr style={{ cursor: "pointer" }}>
        {columns.map((column) => (
          <th key={column.path} onClick={() => handleSort(column)}>
            {column.label} {renderSortIcon(column)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
