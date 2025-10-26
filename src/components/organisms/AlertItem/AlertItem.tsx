// import { AlertCircleIcon } from "lucide-react";
// import {
//   Alert,
//   AlertDescription,
//   AlertTitle,
// } from "@/components/ui/alert";
// import { Progress } from "@/components/ui/progress";

// type InventoryItem = {
//   name: string;
//   status: "Urgent" | "Low Stock";
//   current: number;
//   unit: string;
//   reorderLevel: number;
// };

// const inventoryData: InventoryItem[] = [
//   {
//     name: "Black Denim Fabric",
//     status: "Urgent",
//     current: 45,
//     unit: "meters",
//     reorderLevel: 100,
//   },
//   {
//     name: "Metal Buttons #5",
//     status: "Low Stock",
//     current: 850,
//     unit: "pieces",
//     reorderLevel: 1000,
//   },
//   {
//     name: "Heavy Duty Thread",
//     status: "Urgent",
//     current: 12,
//     unit: "spools",
//     reorderLevel: 20,
//   },
// ];

// export function InventoryAlerts() {
//   return (
//     <div className="grid w-full max-w-xl items-start gap-4">
//       {inventoryData.map((item, index) => {
//         const progressValue = (item.current / item.reorderLevel) * 100;
//         const statusColor =
//           item.status === "Urgent" ? "bg-red-600" : "bg-blue-500";

//         return (
//           <Alert key={index} variant="destructive">
//             <AlertCircleIcon />
//             <AlertTitle className="flex items-center justify-between w-full gap-2">
//               <span>{item.name}</span>
//               <span
//                 className={`px-2 py-0.5 text-xs font-medium rounded-full ${statusColor} text-white`}
//               >
//                 {item.status}
//               </span>
//               <span className="ml-auto text-sm">{item.current} {item.unit}</span>
//             </AlertTitle>
//             <AlertDescription>
//               <Progress value={progressValue} className="w-full mt-1" />
//               <p className="text-xs text-muted-foreground mt-1">
//                 Reorder level: {item.reorderLevel} {item.unit}
//               </p>
//             </AlertDescription>
//           </Alert>
//         );
//       })}
//     </div>
//   );
// }


import { AlertCircleIcon } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";

type InventoryItem = {
  name: string;
  status: "Urgent" | "Low Stock";
  current: number;
  unit: string;
  reorderLevel: number;
};

const inventoryData: InventoryItem[] = [
  {
    name: "Black Denim Fabric",
    status: "Urgent",
    current: 45,
    unit: "meters",
    reorderLevel: 100,
  },
  {
    name: "Metal Buttons #5",
    status: "Low Stock",
    current: 850,
    unit: "pieces",
    reorderLevel: 1000,
  },
  {
    name: "Heavy Duty Thread",
    status: "Urgent",
    current: 12,
    unit: "spools",
    reorderLevel: 20,
  },
];

export function InventoryAlerts() {
  return (
    <div className="w-full max-w-2xl p-4 bg-white rounded-2xl shadow-md border border-gray-200">
      {/* Enterprise-level Topic/Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          Inventory Alerts
        </h2>
        <p className="text-sm text-muted-foreground">
          Monitor stock levels to ensure timely replenishment of critical items.
        </p>
      </div>

      {/* Alerts Grid */}
      <div className="grid w-full gap-4">
        {inventoryData.map((item, index) => {
          const progressValue = (item.current / item.reorderLevel) * 100;
          const statusColor =
            item.status === "Urgent" ? "bg-red-600" : "bg-blue-500";

          return (
            <Alert key={index} variant="destructive" className="border-l-4 border-red-500">
              <AlertCircleIcon className="mr-2" />
              <AlertTitle className="flex items-center justify-between w-full gap-2">
                <span className="font-medium">{item.name}</span>
                <span
                  className={`px-2 py-0.5 text-xs font-medium rounded-full ${statusColor} text-white`}
                >
                  {item.status}
                </span>
                <span className="ml-auto text-sm text-gray-700">
                  {item.current} {item.unit}
                </span>
              </AlertTitle>
              <AlertDescription className="mt-2">
                <Progress value={progressValue} className="w-full h-2 rounded-md" />
                <p className="text-xs text-muted-foreground mt-1">
                  Reorder level: {item.reorderLevel} {item.unit}
                </p>
              </AlertDescription>
            </Alert>
          );
        })}
      </div>
    </div>
  );
}
