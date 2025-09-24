import { Header } from "@/components/Header";
import { MetricCard } from "@/components/MetricCard";
import { FlowChart } from "@/components/FlowChart";
import { TransactionTable } from "@/components/TransactionTable";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-8 space-y-8">
        {/* Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MetricCard
            title="Total Inflow"
            value="12,456.78 POL"
            change="+5.2%"
            type="inflow"
            isPositive={true}
          />
          <MetricCard
            title="Total Outflow"
            value="8,932.45 POL"
            change="-2.1%"
            type="outflow"
            isPositive={false}
          />
          <MetricCard
            title="Net Flow"
            value="+3,524.33 POL"
            change="+12.5%"
            type="netflow"
            isPositive={true}
          />
        </div>

        {/* Flow Chart */}
        <FlowChart />

        {/* Recent Transactions */}
        <TransactionTable />
      </main>
    </div>
  );
};

export default Index;
