import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from "recharts";

const mockData = [
  { time: "00:00", inflow: 4000, outflow: 2400, netflow: 1600 },
  { time: "04:00", inflow: 3000, outflow: 3398, netflow: -398 },
  { time: "08:00", inflow: 2000, outflow: 2800, netflow: -800 },
  { time: "12:00", inflow: 2780, outflow: 1908, netflow: 872 },
  { time: "16:00", inflow: 1890, outflow: 4800, netflow: -2910 },
  { time: "20:00", inflow: 2390, outflow: 3800, netflow: -1410 },
];

export const FlowChart = () => {
  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="p-6">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-card-foreground">POL Token Flow Analytics</h3>
          <p className="text-sm text-muted-foreground">Real-time tracking of token movements</p>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="time" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="inflow"
                stroke="hsl(var(--success))"
                strokeWidth={2}
                name="Inflow"
                dot={{ fill: "hsl(var(--success))", strokeWidth: 2, r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="outflow"
                stroke="hsl(var(--destructive))"
                strokeWidth={2}
                name="Outflow"
                dot={{ fill: "hsl(var(--destructive))", strokeWidth: 2, r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="netflow"
                stroke="hsl(var(--accent))"
                strokeWidth={2}
                name="Net Flow"
                dot={{ fill: "hsl(var(--accent))", strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
};