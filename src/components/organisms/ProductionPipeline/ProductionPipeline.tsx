import type { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface PipelineStage {
  id: string;
  name: string;
  units: number;
  progress: number;
}

const pipelineStages: PipelineStage[] = [
  {
    id: '1',
    name: 'Cutting',
    units: 450,
    progress: 100,
  },
  {
    id: '2',
    name: 'Assembling',
    units: 380,
    progress: 84,
  },
  {
    id: '3',
    name: 'Sewing',
    units: 320,
    progress: 71,
  },
  {
    id: '4',
    name: 'Dyeing',
    units: 280,
    progress: 62,
  },
  {
    id: '5',
    name: 'Ironing/QC',
    units: 245,
    progress: 54,
  },
];

export const ProductionPipeline: FC = () => {
  return (
    <Card className="w-full shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-semibold text-(--color-foreground)">
          Production Pipeline Status
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="space-y-6">
          {pipelineStages.map((stage) => (
            <div key={stage.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-(--color-foreground)">
                  {stage.name}
                </span>
                <span className="text-sm font-semibold text-(--color-muted-foreground)">
                  {stage.units} units in progress
                </span>
              </div>
              <Progress 
                value={stage.progress} 
                className="h-2.5 bg-(--color-muted)"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
