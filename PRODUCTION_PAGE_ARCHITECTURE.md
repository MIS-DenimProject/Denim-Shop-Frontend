# Production Page - Component Architecture

## Overview
The Production page is built using **Atomic Design principles**, making it highly modular, reusable, and easy to maintain.

---

## 📁 Component Structure

### **Atoms** (Smallest building blocks)

#### 1. `StageIcon`
- **Location**: `src/components/atoms/StageIcon/`
- **Purpose**: Displays colored icons for each production stage
- **Props**:
  - `stage`: "Cutting" | "Assembling" | "Sewing" | "Dyeing" | "Ironing/QC"
  - `isActive`: boolean (optional)
  - `isCompleted`: boolean (optional)
- **Color Mapping**:
  - Cutting: Blue (#3b82f6)
  - Assembling: Purple (#a855f7)
  - Sewing: Pink (#ec4899)
  - Dyeing: Orange (#f97316)
  - Ironing/QC: Green (#22c55e)

#### 2. `ProgressBar`
- **Location**: `src/components/atoms/ProgressBar/`
- **Purpose**: Shows production progress percentage
- **Props**:
  - `percentage`: number (0-100)
- **Styling**: Uses neutral-900 color for consistency

#### 3. `StatusBadge`
- **Location**: `src/components/atoms/StatusBadge/`
- **Purpose**: Displays status icons (info or warning)
- **Props**:
  - `type`: "info" | "warning"
- **Icons**: Info (blue), Clock (yellow)

---

### **Molecules** (Combined atoms)

#### 1. `PipelineStageCard`
- **Location**: `src/components/molecules/PipelineStageCard/`
- **Purpose**: Single card in the production pipeline
- **Composition**: StageIcon + text labels
- **Features**:
  - Shows stage name
  - Displays unit count
  - Optional arrow connector
  - Hover effects with shadow

#### 2. `ProductionItemRow`
- **Location**: `src/components/molecules/ProductionItemRow/`
- **Purpose**: Table row for a production item
- **Composition**: ProgressBar + StatusBadge + text fields
- **Data displayed**:
  - Order ID (clickable link)
  - Style name
  - Quantity
  - Current stage badge
  - Progress bar
  - Team assignment
  - Completion date
  - Status icon

#### 3. `TimelineStage`
- **Location**: `src/components/molecules/TimelineStage/`
- **Purpose**: Single stage in the timeline view
- **Composition**: StageIcon + connector line
- **Features**:
  - Shows completion checkmark
  - Colored connector lines
  - Active/completed states

---

### **Organisms** (Complex components)

#### 1. `ProductionPipeline`
- **Location**: `src/components/organisms/ProductionPipeline/`
- **Purpose**: Overview of all production stages
- **Composition**: Multiple PipelineStageCards
- **Layout**: Horizontal flex with arrows between cards
- **Data structure**:
```typescript
{
  stage: "Cutting" | "Assembling" | "Sewing" | "Dyeing" | "Ironing/QC",
  count: number
}[]
```

#### 2. `ProductionTable`
- **Location**: `src/components/organisms/ProductionTable/`
- **Purpose**: Detailed table of all production orders
- **Composition**: Multiple ProductionItemRows
- **Features**:
  - Sortable columns
  - "View All Stages" button
  - Hover effects on rows
  - Responsive table design
- **Data structure**:
```typescript
{
  orderId: string,
  style: string,
  quantity: string,
  currentStage: string,
  progress: number,
  assignedTo: string,
  estCompletion: string,
  status: "info" | "warning"
}[]
```

#### 3. `ProductionTimeline`
- **Location**: `src/components/organisms/ProductionTimeline/`
- **Purpose**: Visual timeline of order progress
- **Composition**: Multiple TimelineStages per order
- **Features**:
  - Order progress percentage
  - Visual stage completion
  - Clickable order IDs
  - Clean separation between orders
- **Data structure**:
```typescript
{
  orderId: string,
  quantity: number,
  style: string,
  progress: number,
  stages: {
    stage: "Cutting" | "Assembling" | "Sewing" | "Dyeing" | "Ironing/QC",
    isCompleted: boolean,
    isActive: boolean
  }[]
}[]
```

---

### **Template**

#### `ProductionTemplate`
- **Location**: `src/components/templates/Productions Template/`
- **Purpose**: Main layout combining all organisms
- **Sections**:
  1. **Header**: Page title with icon and date
  2. **Pipeline Section**: ProductionPipeline organism
  3. **Table Section**: ProductionTable organism
  4. **Timeline Section**: ProductionTimeline organism
- **Layout**: Vertical stack with consistent spacing (space-y-8)

---

### **Page**

#### `ProductionsPage`
- **Location**: `src/components/pages/ProductionsPage/`
- **Purpose**: Page wrapper with padding
- **Composition**: ProductionTemplate with p-8 padding

---

## 🎨 Design System

### Colors Used
- **Primary (Denim)**: 
  - `denim-600`: #4b6ea9
  - `denim-500`: #6b8dc9
- **Neutral**:
  - `neutral-50` to `neutral-900`
- **Semantic**:
  - Success: `green-500` (#22c55e)
  - Warning: `yellow-500` (#eab308)
  - Info: `blue-500` (#3b82f6)
  - Error: `orange-500` (#f97316)

### Typography
- **Headings**: Bold, neutral-900
- **Body**: Regular, neutral-700/600
- **Labels**: Uppercase, neutral-700, tracking-wider
- **Links**: Blue-600 with hover states

### Spacing
- **Card padding**: p-6 to p-8
- **Section gaps**: space-y-8
- **Element gaps**: gap-2 to gap-4

### Shadows & Borders
- **Cards**: border-neutral-200 with shadow-sm
- **Hover**: shadow-md transition
- **Borders**: border-neutral-200 (consistent 1px)

---

## 🔄 Data Flow

```
ProductionTemplate
  ├─ Defines data structures
  ├─ Passes data to organisms
  │
  ├─ ProductionPipeline
  │   └─ Maps data to PipelineStageCards
  │       └─ Renders StageIcon + labels
  │
  ├─ ProductionTable
  │   └─ Maps data to ProductionItemRows
  │       ├─ Renders ProgressBar
  │       └─ Renders StatusBadge
  │
  └─ ProductionTimeline
      └─ Maps data to timeline items
          └─ Maps stages to TimelineStages
              └─ Renders StageIcon + connectors
```

---

## ✅ Best Practices Implemented

1. **Separation of Concerns**: Each component has a single responsibility
2. **Reusability**: Atoms can be used across different organisms
3. **Type Safety**: All components use TypeScript interfaces
4. **Consistency**: Shared color palette and design tokens
5. **Accessibility**: Semantic HTML and proper contrast ratios
6. **Performance**: Efficient re-renders with proper key props
7. **Maintainability**: Clear folder structure and naming conventions

---

## 🚀 Usage Example

```tsx
import { ProductionTemplate } from "@/components";

export const ProductionsPage = () => {
  return (
    <div className="p-8">
      <ProductionTemplate />
    </div>
  );
};
```

---

## 📝 Future Enhancements

- [ ] Add real-time data updates
- [ ] Implement sorting/filtering in table
- [ ] Add stage detail modals
- [ ] Include export functionality
- [ ] Add responsive mobile views
- [ ] Implement drag-and-drop for timeline
