import type { FC } from "react";
import { useState } from "react";
import { cn } from "@/utils";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type { ChartConfig } from "@/components/ui/chart";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProductionChartProps {
  className?: string;
}

export const description = "An interactive area chart";

const chartConfig = {
  visitors: {
    label: "Production",
  },
  production: {
    label: "Production",
    color: "var(--denim-600)",
  },
  target: {
    label: "Target",
    color: "var(--neutral-600)",
  },
} satisfies ChartConfig;

const chartData = [
  { date: "2025-04-01", production: 222, target: 150 },
  { date: "2025-04-02", production: 97, target: 180 },
  { date: "2025-04-03", production: 167, target: 120 },
  { date: "2025-04-04", production: 242, target: 260 },
  { date: "2025-04-05", production: 373, target: 290 },
  { date: "2025-04-06", production: 301, target: 340 },
  { date: "2025-04-07", production: 245, target: 180 },
  { date: "2025-04-08", production: 409, target: 320 },
  { date: "2025-04-09", production: 59, target: 110 },
  { date: "2025-04-10", production: 261, target: 190 },
  { date: "2025-04-11", production: 327, target: 350 },
  { date: "2025-04-12", production: 292, target: 210 },
  { date: "2025-04-13", production: 342, target: 380 },
  { date: "2025-04-14", production: 137, target: 220 },
  { date: "2025-04-15", production: 120, target: 170 },
  { date: "2025-04-16", production: 138, target: 190 },
  { date: "2025-04-17", production: 446, target: 360 },
  { date: "2025-04-18", production: 364, target: 410 },
  { date: "2025-04-19", production: 243, target: 180 },
  { date: "2025-04-20", production: 89, target: 150 },
  { date: "2025-04-21", production: 137, target: 200 },
  { date: "2025-04-22", production: 224, target: 170 },
  { date: "2025-04-23", production: 138, target: 230 },
  { date: "2025-04-24", production: 387, target: 290 },
  { date: "2025-04-25", production: 215, target: 250 },
  { date: "2025-04-26", production: 75, target: 130 },
  { date: "2025-04-27", production: 383, target: 420 },
  { date: "2025-04-28", production: 122, target: 180 },
  { date: "2025-04-29", production: 315, target: 240 },
  { date: "2025-04-30", production: 454, target: 380 },
  { date: "2025-05-01", production: 165, target: 220 },
  { date: "2025-05-02", production: 293, target: 310 },
  { date: "2025-05-03", production: 247, target: 190 },
  { date: "2025-05-04", production: 385, target: 420 },
  { date: "2025-05-05", production: 481, target: 390 },
  { date: "2025-05-06", production: 498, target: 520 },
  { date: "2025-05-07", production: 388, target: 300 },
  { date: "2025-05-08", production: 149, target: 210 },
  { date: "2025-05-09", production: 227, target: 180 },
  { date: "2025-05-10", production: 293, target: 330 },
  { date: "2025-05-11", production: 335, target: 270 },
  { date: "2025-05-12", production: 197, target: 240 },
  { date: "2025-05-13", production: 197, target: 160 },
  { date: "2025-05-14", production: 448, target: 490 },
  { date: "2025-05-15", production: 473, target: 380 },
  { date: "2025-05-16", production: 338, target: 400 },
  { date: "2025-05-17", production: 499, target: 420 },
  { date: "2025-05-18", production: 315, target: 350 },
  { date: "2025-05-19", production: 235, target: 180 },
  { date: "2025-05-20", production: 177, target: 230 },
  { date: "2025-05-21", production: 82, target: 140 },
  { date: "2025-05-22", production: 81, target: 120 },
  { date: "2025-05-23", production: 252, target: 290 },
  { date: "2025-05-24", production: 294, target: 220 },
  { date: "2025-05-25", production: 201, target: 250 },
  { date: "2025-05-26", production: 213, target: 170 },
  { date: "2025-05-27", production: 420, target: 460 },
  { date: "2025-05-28", production: 233, target: 190 },
  { date: "2025-05-29", production: 78, target: 130 },
  { date: "2025-05-30", production: 340, target: 280 },
  { date: "2025-05-31", production: 178, target: 230 },
  { date: "2025-06-01", production: 178, target: 200 },
  { date: "2025-06-02", production: 470, target: 410 },
  { date: "2025-06-03", production: 103, target: 160 },
  { date: "2025-06-04", production: 439, target: 380 },
  { date: "2025-06-05", production: 88, target: 140 },
  { date: "2025-06-06", production: 294, target: 250 },
  { date: "2025-06-07", production: 323, target: 370 },
  { date: "2025-06-08", production: 385, target: 320 },
  { date: "2025-06-09", production: 438, target: 480 },
  { date: "2025-06-10", production: 155, target: 200 },
  { date: "2025-06-11", production: 92, target: 150 },
  { date: "2025-06-12", production: 492, target: 420 },
  { date: "2025-06-13", production: 81, target: 130 },
  { date: "2025-06-14", production: 426, target: 380 },
  { date: "2025-06-15", production: 307, target: 350 },
  { date: "2025-06-16", production: 371, target: 310 },
  { date: "2025-06-17", production: 475, target: 520 },
  { date: "2025-06-18", production: 107, target: 170 },
  { date: "2025-06-19", production: 341, target: 290 },
  { date: "2025-06-20", production: 408, target: 450 },
  { date: "2025-06-21", production: 169, target: 210 },
  { date: "2025-06-22", production: 317, target: 270 },
  { date: "2025-06-23", production: 480, target: 530 },
  { date: "2025-06-24", production: 132, target: 180 },
  { date: "2025-06-25", production: 141, target: 190 },
  { date: "2025-06-26", production: 434, target: 380 },
  { date: "2025-06-27", production: 448, target: 490 },
  { date: "2025-06-28", production: 149, target: 200 },
  { date: "2025-06-29", production: 103, target: 160 },
  { date: "2025-06-30", production: 446, target: 400 },
];

export const ProductionChart: FC<ProductionChartProps> = ({ className }) => {
  const [timeRange, setTimeRange] = useState("90d");

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2025-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });
  return <div className={cn(``, className)}>
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Production vs Target Chart</CardTitle>
          <CardDescription>
            Showing production vs target for the last 3 months
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden w-40 rounded-lg sm:ml-auto sm:flex"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--denim-700)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--denim-700)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--neutral-700)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--neutral-700)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="target"
              type="natural"
              fill="url(#fillMobile)"
              stroke="var(--neutral-700)"
              stackId="a"
            />
            <Area
              dataKey="production"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--denim-700)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  </div>;
};


