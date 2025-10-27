# Quality Control Page - Component Architecture

## Overview
The Quality Control page follows **Atomic Design principles** for a modular, maintainable structure. It provides comprehensive quality inspection tracking with stats, history, defect analysis, and checklists.

---

## 📁 Component Structure

### **Atoms** (Smallest building blocks)

#### 1. `StatCard`
- **Location**: `src/components/atoms/StatCard/`
- **Purpose**: Displays key metrics with optional trends
- **Props**:
  - `label`: string - Card title
  - `value`: string | number - Main metric value
  - `type`: "default" | "success" | "error" | "warning" (optional)
  - `trend`: "up" | "down" (optional)
  - `subtitle`: string (optional)
- **Features**:
  - Color-coded by type
  - Trend indicators with icons
  - Hover effects

#### 2. `ChecklistItem`
- **Location**: `src/components/atoms/ChecklistItem/`
- **Purpose**: Single checklist item with check mark
- **Props**:
  - `label`: string - Checklist item text
  - `isChecked`: boolean (optional, default: true)
- **Features**:
  - Green check icon when checked
  - Hover border color change
  - Clean, readable design

#### 3. `DefectBar`
- **Location**: `src/components/atoms/DefectBar/`
- **Purpose**: Horizontal bar chart for defect counts
- **Props**:
  - `label`: string - Defect category name
  - `count`: number - Number of occurrences
  - `maxCount`: number - Max value for scaling
- **Features**:
  - Animated red progress bar
  - Dynamic width based on percentage
  - Count display

---

### **Molecules** (Combined atoms)

#### 1. `InspectionRow`
- **Location**: `src/components/molecules/InspectionRow/`
- **Purpose**: Table row for inspection history
- **Props**:
  - `batchId`: string (clickable link)
  - `orderId`: string
  - `totalQty`: number
  - `inspected`: number
  - `passed`: number (green)
  - `failed`: number (red)
  - `passRate`: number (percentage)
  - `inspector`: string
  - `date`: string
  - `status`: "Completed" | "In Progress"
  - `trend`: "up" | "down" (optional)
- **Features**:
  - Color-coded pass/fail numbers
  - Trend indicators
  - Status badge
  - Hover effects

#### 2. `FailedItemCard`
- **Location**: `src/components/molecules/FailedItemCard/`
- **Purpose**: Card showing failed batch details
- **Props**:
  - `batchId`: string (clickable link)
  - `orderId`: string
  - `failedCount`: number
  - `defects`: string[] - List of defect types
- **Features**:
  - Failed count badge
  - Defect tags
  - Hover shadow effect

---

### **Organisms** (Complex components)

#### 1. `StatsOverview`
- **Location**: `src/components/organisms/StatsOverview/`
- **Purpose**: Dashboard metrics grid
- **Composition**: 4 StatCards with icons
- **Metrics**:
  - Total Inspected (blue icon)
  - Pass Rate (green icon, with trend)
  - Failed Units (red icon)
  - Active Inspections (yellow icon)
- **Layout**: 4-column grid, responsive

#### 2. `InspectionHistoryTable`
- **Location**: `src/components/organisms/InspectionHistoryTable/`
- **Purpose**: Comprehensive inspection records table
- **Composition**: Multiple InspectionRows
- **Columns**:
  - Batch # | Order # | Total Qty | Inspected
  - Passed | Failed | Pass Rate | Inspector  
  - Date | Status
- **Features**:
  - Sortable headers
  - Hover row highlights
  - Responsive scrolling

#### 3. `DefectCategories`
- **Location**: `src/components/organisms/DefectCategories/`
- **Purpose**: Top defect categories visualization
- **Composition**: Multiple DefectBars
- **Features**:
  - Orange warning icon header
  - Ranked list (1-4)
  - Relative bar sizing
- **Data structure**:
```typescript
{
  label: string,
  count: number
}[]
```

#### 4. `RecentFailedItems`
- **Location**: `src/components/organisms/RecentFailedItems/`
- **Purpose**: Recent batches with failures
- **Composition**: Multiple FailedItemCards
- **Features**:
  - Red error icon header
  - Stacked card layout
  - Quick defect identification
- **Data structure**:
```typescript
{
  batchId: string,
  orderId: string,
  failedCount: number,
  defects: string[]
}[]
```

#### 5. `QCChecklist`
- **Location**: `src/components/organisms/QCChecklist/`
- **Purpose**: Standard quality control checklist
- **Composition**: Multiple ChecklistItems
- **Features**:
  - Blue document icon header
  - 2-column grid layout
  - "Standard" highlight in header
- **Checklist items**:
  - Stitching quality
  - Color consistency
  - Button/zipper functionality
  - Size accuracy
  - Fabric quality
  - Thread trimming
  - Label placement
  - Overall appearance

---

### **Template**

#### `QualityControlTemplate`
- **Location**: `src/components/templates/Quality Control Template/`
- **Purpose**: Main layout orchestrating all QC organisms
- **Sections**:
  1. **Header**: Title, date, "New Inspection" button
  2. **Stats Overview**: StatsOverview organism
  3. **Inspection History**: InspectionHistoryTable organism
  4. **Bottom Grid**: 2-column layout
     - DefectCategories (left)
     - RecentFailedItems (right)
  5. **QC Checklist**: QCChecklist organism
- **Layout**: Vertical stack with space-y-8

---

### **Page**

#### `QualityControlPage`
- **Location**: `src/components/pages/QualityControlPage/`
- **Purpose**: Page wrapper
- **Composition**: QualityControlTemplate with p-8 padding

---

## 🎨 Design System

### Colors Used
- **Primary**: Denim gradient (denim-600 to denim-500)
- **Success**: Green-600 (#10b981)
- **Error/Failed**: Red-600 (#dc2626), Red-500 for bars
- **Warning**: Yellow-600 (#ca8a04)
- **Info**: Blue-600 (#2563eb)
- **Neutral**: Gray scale for text and backgrounds

### Icon System
- **Total Inspected**: ClipboardList (blue background)
- **Pass Rate**: CheckCircle2 (green background)
- **Failed Units**: XCircle (red background)
- **Active Inspections**: AlertCircle (yellow background)
- **Defect Categories**: AlertTriangle (orange background)
- **Failed Items**: XCircle (red background)
- **Checklist**: FileText (blue background)

### Typography
- **Page Title**: text-3xl, font-bold
- **Section Headers**: text-xl, font-bold
- **Table Headers**: text-xs, uppercase, tracking-wider
- **Metrics**: text-3xl, font-bold
- **Labels**: text-sm, font-medium

### Spacing
- **Main container**: max-w-[1400px], space-y-8
- **Cards**: p-6 to p-8
- **Grid gaps**: gap-4 to gap-8
- **Icon containers**: w-10 h-10 to w-14 h-14

### Interaction States
- **Cards**: hover:shadow-md
- **Rows**: hover:bg-neutral-50
- **Buttons**: hover:bg-neutral-800
- **Links**: hover:text-blue-800
- **Borders**: hover:border-green-300 (checklist)

---

## 📊 Data Flow

```
QualityControlTemplate
  ├─ Defines all data structures
  ├─ Passes data to organisms
  │
  ├─ StatsOverview
  │   └─ Maps stats to StatCards
  │       └─ Renders metrics with icons
  │
  ├─ InspectionHistoryTable
  │   └─ Maps inspections to InspectionRows
  │       └─ Displays comprehensive inspection data
  │
  ├─ DefectCategories
  │   └─ Maps categories to DefectBars
  │       └─ Visualizes defect distribution
  │
  ├─ RecentFailedItems
  │   └─ Maps items to FailedItemCards
  │       └─ Shows failed batches with defects
  │
  └─ QCChecklist
      └─ Maps items to ChecklistItems
          └─ Standard QC requirements
```

---

## ✅ Features Implemented

### 1. **Stats Dashboard**
- 4 key metrics with color-coded cards
- Trend indicators (up/down arrows)
- Icon badges for quick identification

### 2. **Inspection History**
- Complete inspection records
- Pass/fail tracking with percentages
- Inspector assignment tracking
- Status indicators (Completed/In Progress)
- Trend analysis per inspection

### 3. **Defect Analysis**
- Top defect categories ranked
- Visual bar chart representation
- Occurrence count display
- Relative sizing for comparison

### 4. **Failed Items Tracking**
- Recent failed batches
- Defect categorization per batch
- Failed unit counts
- Quick defect identification with tags

### 5. **QC Checklist**
- Standard quality checks
- 8-point inspection criteria
- Visual check indicators
- 2-column responsive grid

### 6. **Action Button**
- "New Inspection" button
- Prominent placement in header
- Ready for inspection workflow integration

---

## 🎯 Key Benefits

1. **Comprehensive Tracking**: All QC metrics in one view
2. **Visual Clarity**: Color-coded information for quick scanning
3. **Actionable Insights**: Defect trends and patterns
4. **Standardization**: Consistent checklist across all inspections
5. **Modularity**: Easy to add/remove sections
6. **Reusability**: Components work across different pages
7. **Type Safety**: Full TypeScript support
8. **Performance**: Efficient rendering with proper keys
9. **Responsiveness**: Mobile-friendly grid layouts
10. **Accessibility**: Semantic HTML and proper contrast

---

## 🚀 Usage Example

```typescript
import { QualityControlTemplate } from "@/components";

export const QualityControlPage = () => {
  return (
    <div className="p-8">
      <QualityControlTemplate />
    </div>
  );
};
```

---

## 📝 Future Enhancements

- [ ] Real-time inspection updates
- [ ] Filtering and sorting in history table
- [ ] Defect detail modals
- [ ] Inspector performance metrics
- [ ] Export inspection reports
- [ ] Batch comparison tools
- [ ] Mobile inspection app integration
- [ ] Defect image upload
- [ ] Custom checklist templates
- [ ] Notification system for failures
