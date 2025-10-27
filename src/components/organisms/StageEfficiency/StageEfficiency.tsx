import type { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StageData {
  id: string;
  name: string;
  throughput: string;
  efficiency: number;
  trend: 'up' | 'down';
}

const stageData: StageData[] = [
  {
    id: '1',
    name: 'Cutting',
    throughput: 'Throughput: 450 units/day',
    efficiency: 92,
    trend: 'up',
  },
  {
    id: '2',
    name: 'Assembling',
    throughput: 'Throughput: 380 units/day',
    efficiency: 88,
    trend: 'down',
  },
  {
    id: '3',
    name: 'Sewing',
    throughput: 'Throughput: 320 units/day',
    efficiency: 90,
    trend: 'up',
  },
  {
    id: '4',
    name: 'Dyeing',
    throughput: 'Throughput: 280 units/day',
    efficiency: 85,
    trend: 'down',
  },
  {
    id: '5',
    name: 'Ironing/QC',
    throughput: 'Throughput: 245 units/day',
    efficiency: 94,
    trend: 'up',
  },
];

export const StageEfficiency: FC = () => {
  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold">Stage Efficiency Analysis</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {stageData.map((stage) => (
          <div 
            key={stage.id} 
            className="p-3 md:p-4 border border-(--color-border) rounded-lg hover:bg-(--color-muted) transition-colors duration-150"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-sm font-semibold text-(--color-foreground)">
                    {stage.name}
                  </h3>
                  {stage.trend === 'up' ? (
                    <TrendingUp className="w-4 h-4 text-green-600 shrink-0" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-600 shrink-0" />
                  )}
                </div>
                <p className="text-xs text-(--color-muted-foreground)">
                  {stage.throughput}
                </p>
              </div>
              <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg bg-black text-white font-bold text-xs md:text-sm shrink-0">
                {stage.efficiency}%
              </div>
            </div>
            <Progress 
              value={stage.efficiency} 
              className="h-1.5 bg-(--color-muted)"
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
