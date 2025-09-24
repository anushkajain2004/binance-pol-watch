import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  type: "inflow" | "outflow" | "netflow";
  isPositive?: boolean;
}

export const MetricCard = ({ title, value, change, type, isPositive }: MetricCardProps) => {
  const getIcon = () => {
    switch (type) {
      case "inflow":
        return <TrendingUp className="h-5 w-5 text-success" />;
      case "outflow":
        return <TrendingDown className="h-5 w-5 text-destructive" />;
      case "netflow":
        return <Activity className="h-5 w-5 text-accent" />;
    }
  };

  const getGradient = () => {
    switch (type) {
      case "inflow":
        return "bg-gradient-success";
      case "outflow":
        return "bg-gradient-danger";
      case "netflow":
        return "bg-gradient-primary";
    }
  };

  return (
    <Card className="relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm">
      <div className={`absolute inset-0 opacity-10 ${getGradient()}`} />
      <div className="relative p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold text-card-foreground">{value}</p>
          </div>
          {getIcon()}
        </div>
        <div className="mt-4 flex items-center text-sm">
          <span className={`font-medium ${isPositive ? 'text-success' : 'text-destructive'}`}>
            {change}
          </span>
          <span className="ml-1 text-muted-foreground">from last hour</span>
        </div>
      </div>
    </Card>
  );
};