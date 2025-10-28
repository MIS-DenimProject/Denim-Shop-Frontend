import type { FC } from 'react';
import { KPI } from '@/components';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const defectData = [
  { month: 'Jan', rate: 2.8 },
  { month: 'Feb', rate: 2.6 },
  { month: 'Mar', rate: 2.4 },
  { month: 'Apr', rate: 2.7 },
  { month: 'May', rate: 2.3 },
  { month: 'Jun', rate: 2.5 },
  { month: 'Jul', rate: 2.2 },
  { month: 'Aug', rate: 2.1 },
  { month: 'Sep', rate: 2.3 },
  { month: 'Oct', rate: 2.1 },
];

const defectTypes = [
  { name: 'Stitching Issues', value: 35, color: '#ef4444' },
  { name: 'Fabric Defects', value: 25, color: '#f59e0b' },
  { name: 'Color Mismatch', value: 20, color: '#3b82f6' },
  { name: 'Size Issues', value: 15, color: '#8b5cf6' },
  { name: 'Other', value: 5, color: '#6b7280' },
];

export const QualityTab: FC = () => {
  return (
    <div className="space-y-6">
      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPI
          title="Quality Pass Rate"
          value="93.7%"
          change="+2.3%"
          trend="up"
          subtext="vs last period"
        />
        <KPI
          title="Defect Rate"
          value="2.1%"
          change="-0.4%"
          trend="down"
          subtext="Lower is better"
        />
        <KPI
          title="Rework Rate"
          value="3.5%"
          change="-0.6%"
          trend="down"
          subtext="Items requiring rework"
        />
        <KPI
          title="First Pass Yield"
          value="91.2%"
          change="+1.8%"
          trend="up"
          subtext="First-time quality"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {/* Defect Rate Trend */}
        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-base md:text-lg font-semibold">Defect Rate Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={defectData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis 
                  dataKey="month" 
                  tick={{ fontSize: 11 }}
                  stroke="#9ca3af"
                />
                <YAxis 
                  tick={{ fontSize: 11 }}
                  stroke="#9ca3af"
                  domain={[0, 3]}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '12px',
                  }}
                />
                <Bar dataKey="rate" fill="#ef4444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Defect Types Distribution */}
        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-base md:text-lg font-semibold">Defect Types Distribution</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={defectTypes}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(entry) => `${entry.name}: ${entry.value}%`}
                  outerRadius={70}
                  fill="#8884d8"
                  dataKey="value"
                  style={{ fontSize: '11px' }}
                >
                  {defectTypes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ fontSize: '12px' }} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Quality Metrics by Stage */}
      <Card className="shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold">Quality Metrics by Stage</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { stage: 'Cutting', passRate: 96.5, inspected: 4520 },
            { stage: 'Assembling', passRate: 94.2, inspected: 3850 },
            { stage: 'Sewing', passRate: 92.8, inspected: 3200 },
            { stage: 'Dyeing', passRate: 91.5, inspected: 2890 },
            { stage: 'Finishing', passRate: 95.3, inspected: 2650 },
          ].map((item, index) => (
            <div key={index} className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="text-sm font-semibold text-(--color-foreground)">{item.stage}</span>
                  <span className="text-xs text-(--color-muted-foreground)">
                    {item.inspected} items
                  </span>
                </div>
                <span className="text-sm font-bold text-(--color-foreground)">{item.passRate}%</span>
              </div>
              <Progress value={item.passRate} className="h-1.5 bg-(--color-muted)" />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
