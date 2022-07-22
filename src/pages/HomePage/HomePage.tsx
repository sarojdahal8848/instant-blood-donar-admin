import { Chart, WidgetCard } from "../../components";
import "./homepage.scss";

const genderData = [
  {
    male: 3490,
    female: 4300,
  },
];

const bloodGroupData = [
  {
    "A+": 39,
    "A-": 55,
    "B+": 87,
    "B-": 23,
    "O+": 8,
    "O-": 11,
    "AB+": 87,
    "AB-": 46,
  },
];

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage__widget">
        <WidgetCard title="Donars" value="120" bgColor="blue" />
        <WidgetCard title="Donation" value="260" bgColor="red" />
        <WidgetCard title="Donars" value="80" bgColor="green" />
        <WidgetCard title="Donars" value="70" bgColor="orange" />
      </div>
      <div className="homepage__chart">
        <Chart data={bloodGroupData} title="Blood Groups" />
        <Chart data={genderData} title="Gender" />
      </div>
    </div>
  );
};

export { HomePage };
