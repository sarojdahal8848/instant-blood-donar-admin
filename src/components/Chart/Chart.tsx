import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./chart.scss";

interface ChartData {
  "A+"?: number;
  "A-"?: number;
  "B+"?: number;
  "B-"?: number;
  "O+"?: number;
  "O-"?: number;
  "AB+"?: number;
  "AB-"?: number;
  male?: number;
  female?: number;
}

interface ChartProp {
  data: ChartData[];
  title: string;
}

const Chart = ({ data, title }: ChartProp) => {
  console.log(data);
  return (
    <div className="chart">
      <div className="chart__title">{title}</div>
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        {Object.keys(data[0]).map((key) => {
          return <Bar dataKey={key} fill="#ec0d0d" />;
        })}
      </BarChart>
    </div>
  );
};

export { Chart };
