import {
  BarChart as BarChartLibrary,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function BarChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChartLibrary data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar barSize={75} dataKey="count" stroke="#2cb1bc" fill="#bef8fd" />
      </BarChartLibrary>
    </ResponsiveContainer>
  );
}

export default BarChart;
