import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const mockTransactions = [
  {
    hash: "0x1234...5678",
    from: "0xabcd...efgh",
    to: "0x1122...3344",
    amount: "1,250.50",
    type: "inflow",
    timestamp: "2 min ago",
  },
  {
    hash: "0x2345...6789",
    from: "0x2233...4455",
    to: "0xbcde...fghi",
    amount: "850.25",
    type: "outflow",
    timestamp: "5 min ago",
  },
  {
    hash: "0x3456...789a",
    from: "0xcdef...ghij",
    to: "0x3344...5566",
    amount: "2,100.75",
    type: "inflow",
    timestamp: "8 min ago",
  },
];

export const TransactionTable = () => {
  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="p-6">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-card-foreground">Recent Transactions</h3>
          <p className="text-sm text-muted-foreground">Latest POL token transfers</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/50">
                <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Hash</th>
                <th className="pb-3 text-left text-sm font-medium text-muted-foreground">From</th>
                <th className="pb-3 text-left text-sm font-medium text-muted-foreground">To</th>
                <th className="pb-3 text-right text-sm font-medium text-muted-foreground">Amount</th>
                <th className="pb-3 text-center text-sm font-medium text-muted-foreground">Type</th>
                <th className="pb-3 text-right text-sm font-medium text-muted-foreground">Time</th>
              </tr>
            </thead>
            <tbody>
              {mockTransactions.map((tx, index) => (
                <tr key={index} className="border-b border-border/30 hover:bg-muted/20 transition-colors">
                  <td className="py-4">
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-sm text-card-foreground">{tx.hash}</span>
                      <ExternalLink className="h-3 w-3 text-muted-foreground hover:text-accent cursor-pointer" />
                    </div>
                  </td>
                  <td className="py-4">
                    <span className="font-mono text-sm text-muted-foreground">{tx.from}</span>
                  </td>
                  <td className="py-4">
                    <span className="font-mono text-sm text-muted-foreground">{tx.to}</span>
                  </td>
                  <td className="py-4 text-right">
                    <span className="font-medium text-card-foreground">{tx.amount} POL</span>
                  </td>
                  <td className="py-4 text-center">
                    <Badge 
                      variant={tx.type === "inflow" ? "default" : "destructive"}
                      className={tx.type === "inflow" ? "bg-success/20 text-success hover:bg-success/30" : ""}
                    >
                      {tx.type}
                    </Badge>
                  </td>
                  <td className="py-4 text-right">
                    <span className="text-sm text-muted-foreground">{tx.timestamp}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
};