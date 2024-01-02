import { LineChart, Line, XAxis, YAxis } from "recharts";
const Chart = () => {
  const marksData = [
    { name: "Std 1", math: 55, physics: 80, chemistry: 35 },
    { name: "Std 2", math: 70, physics: 85, chemistry: 50 },
    { name: "Std 3", math: 80, physics: 65, chemistry: 60 },
    { name: "Std 4", math: 95, physics: 78, chemistry: 82 },
    { name: "Std 5", math: 98, physics: 82, chemistry: 77 },
    { name: "Std 6", math: 82, physics: 99, chemistry: 58 },
    { name: "Std 7", math: 95, physics: 76, chemistry: 95 },
    { name: "Std 8", math: 98, physics: 92, chemistry: 85 },
    { name: "Std 9", math: 96, physics: 70, chemistry: 72 },
    { name: "Std 10", math: 90, physics: 94, chemistry: 96 },
  ];

  return (
    <div className="hidden lg:block">
      <h1 className="text-4xl text-center mt-5 font-medium">LineChart</h1>
      <div className="mt-12">
        <LineChart width={1000} height={390} data={marksData}>
          <XAxis dataKey={"name"}></XAxis>
          <YAxis></YAxis>
          <Line dataKey={"math"} stroke="red"></Line>
          <Line dataKey={"physics"} stroke="green"></Line>
          <Line dataKey={"chemistry"} stroke="blue"></Line>
        </LineChart>
      </div>
    </div>
  );
};

export default Chart;
