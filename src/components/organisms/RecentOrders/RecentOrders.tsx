import type { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Order {
  id: string;
  orderNumber: string;
  stage: string;
  customer: string;
  units: number;
  status: 'In Production' | 'Quality Check' | 'Completed' | 'Dyeing' | 'Sewing';
}

const orders: Order[] = [
  {
    id: '1',
    orderNumber: 'ORD-1024',
    stage: 'Sewing',
    customer: 'Blue Denim Wholesale',
    units: 500,
    status: 'In Production',
  },
  {
    id: '2',
    orderNumber: 'ORD-1023',
    stage: 'Dyeing',
    customer: 'Fashion Plus Co.',
    units: 350,
    status: 'In Production',
  },
  {
    id: '3',
    orderNumber: 'ORD-1022',
    stage: 'QC',
    customer: 'Metro Garments',
    units: 400,
    status: 'Quality Check',
  },
  {
    id: '4',
    orderNumber: 'ORD-1021',
    stage: 'Completed',
    customer: 'Retail Hub Ltd.',
    units: 600,
    status: 'Completed',
  },
];

const getStatusColor = (status: Order['status']) => {
  switch (status) {
    case 'In Production':
      return 'bg-blue-100 text-blue-700 border-blue-200';
    case 'Quality Check':
      return 'bg-yellow-100 text-yellow-700 border-yellow-200';
    case 'Completed':
      return 'bg-green-100 text-green-700 border-green-200';
    case 'Dyeing':
      return 'bg-purple-100 text-purple-700 border-purple-200';
    case 'Sewing':
      return 'bg-orange-100 text-orange-700 border-orange-200';
    default:
      return 'bg-gray-100 text-gray-700 border-gray-200';
  }
};

export const RecentOrders: FC = () => {
  return (
    <Card className="w-full shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-semibold text-(--color-foreground)">
          Recent Orders
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="space-y-3">
          {orders.map((order) => (
            <div
              key={order.id}
              className="flex items-center justify-between py-4 px-4 border border-(--color-border) rounded-lg hover:bg-(--color-muted) transition-colors duration-150"
            >
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-(--denim-600) hover:text-(--denim-700) cursor-pointer transition-colors">
                    {order.orderNumber}
                  </span>
                  {order.stage !== 'Completed' && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium border bg-white text-(--color-foreground) border-(--color-border)">
                      {order.stage}
                    </span>
                  )}
                  {order.stage === 'Completed' && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-black text-white">
                      Completed
                    </span>
                  )}
                </div>
                <span className="text-sm text-(--color-muted-foreground)">
                  {order.customer}
                </span>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="font-semibold text-(--color-foreground)">
                  {order.units} units
                </span>
                <span
                  className={`text-xs px-2 py-1 rounded-md ${getStatusColor(
                    order.status
                  )}`}
                >
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
