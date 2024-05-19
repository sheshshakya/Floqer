import { useEffect, useState } from "react";
import { usePapaParse } from "react-papaparse";

export interface SalaryData {
  company_location: string;
  company_size: string;
  employee_residence: string;
  employment_type: string;
  experience_level: string;
  job_title: string;
  remote_ratio: string;
  salary: string;
  salary_currency: string;
  salary_in_usd: string;
  work_year: string;
}

export interface Data {
  year: number;
  totalJobs: number;
  averageSalary: number;
}

const fetchData = () => {
  const [data, setData] = useState<Data[]>([]);
  const [allData, setAllData] = useState<SalaryData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { readString } = usePapaParse();

  useEffect(() => {
    fetch("/salaries.csv")
      .then((response) => response.text())
      .then((csvText) => {
        readString(csvText, {
          header: true,
          complete: (result) => {
            setAllData(result.data as SalaryData[]);
            processData(result.data);
            setLoading(false);
          },
          error: (err) => {
            setError(err.message);
            setLoading(false);
          },
        });
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const processData = (data: any[]) => {
    const result: {
      [year: number]: { totalJobs: number; totalSalary: number };
    } = {};
    data.map((item) => {
      const year = Number.parseInt(item.work_year);
      if (!result[year]) result[year] = { totalJobs: 0, totalSalary: 0 };
      result[year].totalJobs += 1;
      result[year].totalSalary += Number.parseInt(item.salary);
    });
    const finalResult = <Data[]>[];
    for (let i in result) {
      if (i !== "NaN") {
        let avgSalary = result[i].totalSalary / result[i].totalJobs;
        finalResult.push({
          year: Number.parseInt(i),
          totalJobs: result[i].totalJobs,
          averageSalary: avgSalary,
        });
      }
    }
    setData(finalResult);
  };

  return { allData, data, setData, loading, error };
};

export default fetchData;
