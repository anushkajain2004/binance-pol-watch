import { Activity, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Header = () => {
  return (
    <header className="border-b border-border/50 bg-card/30 backdrop-blur-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
                  <Activity className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">POL Flow Monitor</h1>
                <p className="text-sm text-muted-foreground">Real-time Polygon blockchain indexer</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4 text-success" />
              <span className="text-sm text-muted-foreground">Polygon Network</span>
              <Badge variant="outline" className="border-success/50 text-success">
                Live
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};