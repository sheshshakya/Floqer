import { NavLink } from "react-router-dom";
import { Data } from "../../common/fetchData";

const TableBody = ({ data }: { data: Data[] }) => {
  return (
    <tbody>
      {data.map((item) => (
        <tr key={item.year}>
          <td>
            <NavLink to={`/job-title/${item.year}`}>{item.year}</NavLink>
          </td>
          <td>{item.totalJobs}</td>
          <td>{item.averageSalary.toFixed(3)}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
