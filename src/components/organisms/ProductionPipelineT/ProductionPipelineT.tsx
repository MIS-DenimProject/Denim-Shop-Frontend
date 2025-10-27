import type { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface PipelineData {
  stage: "Cutting" | "Assembling" | "Sewing" | "Dyeing" | "Ironing/QC";
  count: number;
}

interface ProductionPipelineTProps {
  data: PipelineData[];
}

// Default stages with progress calculations
const getProgressForStage = (_stageName: string, count: number): number => {
  const maxCount = 450; // Base reference from Cutting stage
  return Math.round((count / maxCount) * 100);
};

export const ProductionPipelineT: FC<ProductionPipelineTProps> = ({ data }) => {
  return (
    <Card className="w-full h-full shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-(--color-foreground)">
          Production Pipeline
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index} className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-(--color-foreground)">
                  {item.stage}
                </span>
                <span className="text-xs font-semibold text-(--color-muted-foreground)">
                  {item.count} units
                </span>
              </div>
              <Progress 
                value={getProgressForStage(item.stage, item.count)} 
                className="h-2 bg-(--color-muted)"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
