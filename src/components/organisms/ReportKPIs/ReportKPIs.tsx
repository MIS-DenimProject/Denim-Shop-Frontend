import type { FC } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface KPIData {
  id: string;
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  subtitle?: string;
}

const kpiData: KPIData[] = [
  {
    id: '1',
    title: 'Total Production',
    value: '51,200',
    change: '+12% vs last period',
    trend: 'up',
  },
  {
    id: '2',
    title: 'Total Revenue',
    value: '$627,750',
    change: '+18% vs last period',
    trend: 'up',
  },
  {
    id: '3',
    title: 'Avg Quality Pass Rate',
    value: '93.7%',
    change: '+2.3% vs last period',
    trend: 'up',
  },
  {
    id: '4',
    title: 'Orders Completed',
    value: '48',
    change: '',
    trend: 'up',
    subtitle: 'Out of 52 total orders',
  },
];

export const ReportKPIs: FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {kpiData.map((kpi) => (
        <Card key={kpi.id} className="shadow-sm hover:shadow-md transition-shadow duration-200">
          <CardContent className="p-6">
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-(--color-muted-foreground)">
                {kpi.title}
              </h3>
              <div className="flex items-baseline gap-2">
                <p className="text-3xl font-bold text-(--color-foreground)">
                  {kpi.value}
                </p>
              </div>
              {kpi.change && (
                <div className="flex items-center gap-1">
                  {kpi.trend === 'up' ? (
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-600" />
                  )}
                  <span className={`text-sm font-medium ${
                    kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {kpi.change}
                  </span>
                </div>
              )}
              {kpi.subtitle && (
                <p className="text-sm text-(--color-muted-foreground)">
                  {kpi.subtitle}
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
