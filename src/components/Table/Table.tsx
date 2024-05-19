import { Data } from "../../common/fetchData";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

export interface Column {
  path: string;
  label: string;
}
export interface SortColumn {
  path: string;
  order: string;
}

interface Props {
  data: Data[];
  columns: Column[];
  sortColumn: SortColumn;
  setSortColumn: (sortColumn: SortColumn) => void;
}

const Table = ({ data, columns, sortColumn, setSortColumn }: Props) => {
  return (
    <table className="table table-light table-bordered mt-3">
      <TableHead
        columns={columns}
        sortColumn={sortColumn}
        setSortColumn={setSortColumn}
      />
      <TableBody data={data} />
    </table>
  );
};

export default Table;
