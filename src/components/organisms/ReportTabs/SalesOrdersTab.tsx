import type { FC } from 'react';
import { KPI } from '@/components';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const revenueData = [
  { month: 'Jan', value: 52000 },
  { month: 'Feb', value: 58000 },
  { month: 'Mar', value: 61000 },
  { month: 'Apr', value: 59000 },
  { month: 'May', value: 65000 },
  { month: 'Jun', value: 63000 },
  { month: 'Jul', value: 68000 },
  { month: 'Aug', value: 72000 },
  { month: 'Sep', value: 70000 },
  { month: 'Oct', value: 75000 },
];

const ordersData = [
  { month: 'Jan', completed: 42, pending: 8, cancelled: 2 },
  { month: 'Feb', completed: 45, pending: 7, cancelled: 1 },
  { month: 'Mar', completed: 48, pending: 6, cancelled: 2 },
  { month: 'Apr', completed: 46, pending: 9, cancelled: 1 },
  { month: 'May', completed: 52, pending: 5, cancelled: 3 },
  { month: 'Jun', completed: 50, pending: 7, cancelled: 1 },
  { month: 'Jul', completed: 54, pending: 6, cancelled: 2 },
  { month: 'Aug', completed: 57, pending: 5, cancelled: 1 },
  { month: 'Sep', completed: 55, pending: 8, cancelled: 2 },
  { month: 'Oct', completed: 60, pending: 4, cancelled: 1 },
];

export const SalesOrdersTab: FC = () => {
  return (
    <div className="space-y-6">
      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPI
          title="Total Revenue"
          value="$627,750"
          change="+18%"
          trend="up"
          subtext="vs last period"
        />
        <KPI
          title="Orders Completed"
          value="48"
          change="+12%"
          trend="up"
          subtext="Out of 52 total"
        />
        <KPI
          title="Average Order Value"
          value="$13,078"
          change="+5.3%"
          trend="up"
          subtext="Per order"
        />
        <KPI
          title="On-Time Delivery"
          value="94%"
          change="+2.7%"
          trend="up"
          subtext="Delivery rate"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Trend */}
        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold">Revenue Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis 
                  dataKey="month" 
                  tick={{ fontSize: 12 }}
                  stroke="#9ca3af"
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  stroke="#9ca3af"
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  dot={{ fill: '#10b981', r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Orders Status */}
        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold">Orders Status</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={ordersData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis 
                  dataKey="month" 
                  tick={{ fontSize: 12 }}
                  stroke="#9ca3af"
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  stroke="#9ca3af"
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="completed" fill="#10b981" radius={[4, 4, 0, 0]} />
                <Bar dataKey="pending" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                <Bar dataKey="cancelled" fill="#ef4444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Top Customers */}
      <Card className="shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold">Top Customers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: 'Blue Denim Wholesale', orders: 24, revenue: '$156,240', growth: '+15%' },
              { name: 'Fashion Plus Co.', orders: 18, revenue: '$127,890', growth: '+22%' },
              { name: 'Metro Garments', orders: 16, revenue: '$98,500', growth: '+8%' },
              { name: 'Retail Hub Ltd.', orders: 14, revenue: '$89,320', growth: '+18%' },
              { name: 'Global Denim Inc.', orders: 12, revenue: '$76,800', growth: '+12%' },
            ].map((customer, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between p-4 border border-(--color-border) rounded-lg hover:bg-(--color-muted) transition-colors"
              >
                <div className="flex-1">
                  <h4 className="font-semibold text-(--color-foreground)">{customer.name}</h4>
                  <p className="text-sm text-(--color-muted-foreground)">{customer.orders} orders</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-(--color-foreground)">{customer.revenue}</p>
                  <p className="text-sm text-green-600">{customer.growth}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
