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
    <Card className="shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold">Stage Efficiency Analysis</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {stageData.map((stage) => (
          <div 
            key={stage.id} 
            className="p-4 border border-(--color-border) rounded-lg hover:bg-(--color-muted) transition-colors duration-150"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-base font-semibold text-(--color-foreground)">
                    {stage.name}
                  </h3>
                  {stage.trend === 'up' ? (
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-600" />
                  )}
                </div>
                <p className="text-sm text-(--color-muted-foreground)">
                  {stage.throughput}
                </p>
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-black text-white font-bold text-sm shrink-0">
                {stage.efficiency}%
              </div>
            </div>
            <Progress 
              value={stage.efficiency} 
              className="h-2 bg-(--color-muted)"
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
