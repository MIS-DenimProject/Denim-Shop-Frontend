// import { TrendingUp } from "lucide-react";
// import { Pie, PieChart } from "recharts";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import type { ChartConfig } from "@/components/ui/chart";
// import {
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart";

// export const description = "A pie chart with a custom label";

// const chartData = [
//   { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
//   { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
//   { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
//   { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
//   { browser: "other", visitors: 90, fill: "var(--color-other)" },
// ];

// const chartConfig = {
//   visitors: {
//     label: "Visitors",
//   },
//   chrome: {
//     label: "Chrome",
//     color: "var(--chart-1)",
//   },
//   safari: {
//     label: "Safari",
//     color: "var(--chart-2)",
//   },
//   firefox: {
//     label: "Firefox",
//     color: "var(--chart-3)",
//   },
//   edge: {
//     label: "Edge",
//     color: "var(--chart-4)",
//   },
//   other: {
//     label: "Other",
//     color: "var(--chart-5)",
//   },
// } satisfies ChartConfig;

// export function PieChartForStages() {
//   return (
//     <Card className="flex flex-col">
//       <CardHeader className="items-center pb-0">
//         <CardTitle>Pie Chart - Custom Label</CardTitle>
//         <CardDescription>January - June 2024</CardDescription>
//       </CardHeader>
//       <CardContent className="flex-1 pb-0">
//         <ChartContainer
//           config={chartConfig}
//           className="mx-auto aspect-square max-h-[250px] px-0"
//         >
//           <PieChart>
//             <ChartTooltip
//               content={<ChartTooltipContent nameKey="visitors" hideLabel />}
//             />
//             <Pie
//               data={chartData}
//               dataKey="visitors"
//               labelLine={false}
//               label={({ payload, ...props }) => {
//                 return (
//                   <text
//                     cx={props.cx}
//                     cy={props.cy}
//                     x={props.x}
//                     y={props.y}
//                     textAnchor={props.textAnchor}
//                     dominantBaseline={props.dominantBaseline}
//                     fill="hsla(var(--foreground))"
//                   >
//                     {payload.visitors}
//                   </text>
//                 );
//               }}
//               nameKey="browser"
//             />
//           </PieChart>
//         </ChartContainer>
//       </CardContent>
//       <CardFooter className="flex-col gap-2 text-sm">
//         <div className="flex items-center gap-2 leading-none font-medium">
//           Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
//         </div>
//         <div className="text-muted-foreground leading-none">
//           Showing total visitors for the last 6 months
//         </div>
//       </CardFooter>
//     </Card>
//   );
// }


import { TrendingUp } from "lucide-react";
import { Pie, PieChart, Cell, LabelList, ResponsiveContainer } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ChartConfig } from "@/components/ui/chart";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A pie chart with a custom label";

const chartData = [
  { stage: "Cutting", count: 275, fill: "var(--color-chrome)" },
  { stage: "Assembling", count: 200, fill: "var(--color-safari)" },
  { stage: "Cutting", count: 187, fill: "var(--color-firefox)" },
  { stage: "Ironing/QC", count: 173, fill: "var(--color-edge)" },
  { stage: "Dyeing", count: 280, fill: "var(--color-other)" },
  { stage: "Sewing", count: 320, fill: "var(--color-other)" },
];

const chartConfig = {
  count: { label: "count" },
  chrome: { label: "Chrome", color: "var(--chart-1)" },
  safari: { label: "Safari", color: "var(--chart-2)" },
  firefox: { label: "Firefox", color: "var(--chart-3)" },
  edge: { label: "Edge", color: "var(--chart-4)" },
  other: { label: "Other", color: "var(--chart-5)" },
} satisfies ChartConfig;

export function PieChartForStages() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Custom Label</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] px-0"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <ChartTooltip
                content={<ChartTooltipContent nameKey="count" hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="count"
                nameKey="stage"
                cx="50%"
                cy="50%"
                outerRadius="90%"
                innerRadius="0%"
                labelLine={false}
                label={({ cx, cy, midAngle, innerRadius, outerRadius, name }) => {
                  const RADIAN = Math.PI / 180;
                  const radius = innerRadius + (outerRadius - innerRadius) / 2;
                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                  const y = cy + radius * Math.sin(-midAngle * RADIAN);
                  return (
                    <text
                      x={x}
                      y={y}
                      fill="white"
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontSize={12}
                    >
                      {name}
                    </text>
                  );
                }}
              >
                {/* Counts outside slices with lines */}
                <LabelList
                  dataKey="count"
                  position="outside"
                  fill="hsla(var(--foreground))"
                  fontSize={12}
                  stroke="none"
                />
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total count for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
