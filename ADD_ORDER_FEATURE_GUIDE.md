# Add Order Manually Feature - Quick Reference

## 🎯 Overview
Users can now manually add production orders with all required fields directly from the Production page.

---

## 📍 Access Point

### "Add New Order" Button
**Location:** Top-right corner of the Production page header

**Visual Design:**
- **Color:** Denim-600 background (brand color)
- **Icon:** Plus (+) symbol
- **Text:** "Add New Order"
- **Effects:** 
  - Hover: Darker denim-700 background
  - Shadow elevation on hover
  - Slight upward transform (-0.5px)
  - Smooth transitions (200ms)

---

## 📋 Form Fields

### Required Fields (marked with *)

#### 1. **Order Information**
- **Order ID*** - Text input (e.g., "ORD-1031")
- **Customer Name*** - Text input

#### 2. **Product Details**
- **Style*** - Dropdown with 8 options:
  - Slim Fit Blue
  - Regular Fit Black
  - Bootcut Indigo
  - Straight Fit Dark
  - Relaxed Fit Light
  - Skinny Fit Black
  - Bootcut Dark Wash
  - Regular Fit Blue

- **Fabric Type*** - Dropdown with 6 options:
  - Blue Denim
  - Black Denim
  - Indigo Denim
  - Dark Wash
  - Light Wash
  - Raw Denim

- **Quantity (units)*** - Number input (e.g., 500)
- **Priority Level*** - Dropdown with 4 options:
  - Low Priority
  - Medium Priority (default)
  - High Priority
  - Urgent

#### 3. **Production Assignment & Progress**
- **Current Stage*** - Dropdown with 5 options:
  - Cutting (default)
  - Assembling
  - Sewing
  - Dyeing
  - Ironing/QC

- **Assigned To*** - Dropdown with 5 teams:
  - Team A - Cutting
  - Team B - Assembly
  - Team C - Sewing
  - Team D - Dyeing
  - Team E - QC

- **Progress (%)*** - Number input (0-100)
  - Min: 0
  - Max: 100
  - Default: 0

- **Est. Completion Date*** - Date picker
  - Format: MM/DD/YYYY

- **Status*** - Dropdown with 2 options:
  - On Track (default)
  - Needs Attention

#### 4. **Additional Information**
- **Special Instructions** - Textarea (optional)
  - Multi-line text input
  - 4 rows tall
  - Placeholder: "Enter any special requirements, notes, or instructions for this order..."

---

## 🎨 Modal Design

### Header
- **Title:** "Add New Production Order"
- **Description:** "Manually add a new order with style, quantity, stage, progress, assignment, completion date, and status"
- **Close Button:** X icon in top-right corner

### Info Banner (Blue)
- **Background:** Blue-50
- **Border:** Blue-200
- **Message:** 
  > **Note:** All fields marked with **\*** are required. This form captures: Style, Quantity, Current Stage, Progress, Assigned To, Est. Completion, and Status.

### Section Headers
- Styled with colored bullet points (denim-500)
- 4 sections:
  1. Order Information
  2. Product Details
  3. Production Assignment & Progress
  4. Additional Information

### Order Preview (Conditional)
- **Appears when:** Style AND Quantity are filled
- **Background:** Denim-50
- **Border:** Denim-200
- **Shows:** 
  - Style
  - Quantity (with "units" suffix)
  - Current Stage
  - Progress (with "%" suffix)
  - Assigned To (if filled)
  - Est. Completion (if filled)
  - Status (converted to readable text)

### Action Buttons
- **Cancel:** 
  - Border with neutral colors
  - Hover: Light gray background
  - Left-aligned

- **Add Order:**
  - Denim-600 background
  - White text
  - Plus icon
  - Shadow effect
  - Hover: Darker background + elevated shadow
  - Right-aligned

---

## 📊 Data Mapping to Table Columns

| Form Field | Table Column | Description |
|------------|--------------|-------------|
| Order ID | Order # | Unique identifier (e.g., ORD-1031) |
| Style | Style | Product style name (e.g., "Slim Fit Blue") |
| Quantity | Quantity | Number with "units" suffix (e.g., "500 units") |
| Current Stage | Current Stage | Active production stage |
| Progress | Progress | Percentage with visual bar (0-100%) |
| Assigned To | Assigned To | Team name (e.g., "Team C - Sewing") |
| Est. Completion | Est. Completion | Date in MM/DD/YYYY format |
| Status | Status | Badge color (info=blue, warning=yellow) |

---

## 🔄 User Flow

### Step 1: Open Modal
1. User clicks "Add New Order" button in header
2. Modal slides in with animation
3. Backdrop appears with blur effect

### Step 2: Fill Required Fields
1. User enters Order ID and Customer Name
2. User selects Style from dropdown
3. User selects Fabric Type
4. User enters Quantity
5. User selects Priority Level
6. **Preview section appears** (after style & quantity filled)

### Step 3: Production Details
1. User selects Current Stage
2. User selects Assigned Team
3. User enters Progress percentage
4. User picks Completion Date
5. User selects Status (On Track / Needs Attention)
6. **Preview updates** with new information

### Step 4: Optional Information
1. User can add Special Instructions (optional)

### Step 5: Submit
1. User reviews Order Preview section
2. User clicks "Add Order" button
3. Form validates all required fields
4. Order data logged to console (placeholder for API call)
5. Modal closes with animation
6. Form resets to initial state

### Alternative: Cancel
1. User clicks "Cancel" button or X icon
2. Modal closes without saving
3. Form resets to initial state

---

## 💻 Technical Details

### Form State
```typescript
{
  orderId: "",
  customerName: "",
  style: "",
  fabricType: "",
  quantity: "",
  priority: "medium",
  currentStage: "Cutting",
  progress: "0",
  assignedTeam: "",
  estCompletion: "",
  status: "info",
  specialInstructions: ""
}
```

### Form Validation
- **Built-in HTML5 validation** (required attribute)
- **Number constraints:**
  - Quantity: positive numbers only
  - Progress: min=0, max=100
- **Date validation:** Uses native date picker

### Submit Handler
```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  console.log("New Order:", formData);
  onOpenChange(false);
  // Reset form
};
```

---

## 🎨 Styling Features

### Responsive Layout
- **Mobile (< 768px):** Single column
- **Tablet/Desktop (≥ 768px):** 2-column grid

### Interactive Elements
- **Hover States:** All buttons and inputs
- **Focus Rings:** Denim-500 color on focus
- **Transitions:** 200ms duration
- **Animations:** Modal slide-in and fade-in

### Color Scheme
- **Primary:** Denim (600, 500, 700, 50)
- **Info Banner:** Blue (50, 200, 800)
- **Preview:** Denim (50, 200, 900)
- **Neutral:** Gray scale (50-900)

---

## 📱 Accessibility

### Features
- **ARIA Labels:** Radix UI Dialog automatically adds
- **Keyboard Navigation:**
  - Tab through form fields
  - Enter to submit
  - Escape to close modal
- **Focus Management:**
  - Focus trapped within modal
  - Returns to trigger button on close
- **Screen Reader Support:**
  - Dialog title announced
  - Form labels properly associated
  - Required fields indicated

---

## 🚀 Future Enhancements

1. **API Integration**
   - POST request to backend
   - Success/error notifications
   - Real-time table update

2. **Auto-generated Order IDs**
   - Sequential numbering
   - Format validation

3. **Team Availability Check**
   - Show team capacity
   - Suggest available teams

4. **Smart Defaults**
   - Auto-assign team based on stage
   - Calculate estimated completion based on quantity

5. **Validation Enhancements**
   - Duplicate order ID check
   - Date validation (not in past)
   - Quantity limits per style

6. **Order Templates**
   - Save common configurations
   - Quick-fill buttons

---

## 📸 Visual Elements

### Button Example
```
┌─────────────────────────┐
│  ➕  Add New Order      │  <- Denim-600 background
└─────────────────────────┘     White text, shadow
         Hover effect: Lifts up + darker
```

### Modal Layout
```
╔═══════════════════════════════════════╗
║  Add New Production Order         ✖  ║
║  Manually add a new order...          ║
╠═══════════════════════════════════════╣
║  ℹ️ Note: All fields marked with *... ║
║                                       ║
║  ● Order Information                  ║
║  [Order ID*]    [Customer Name*]      ║
║                                       ║
║  ● Product Details                    ║
║  [Style*]       [Fabric Type*]        ║
║  [Quantity*]    [Priority*]           ║
║                                       ║
║  ● Production Assignment & Progress   ║
║  [Current Stage*]  [Assigned To*]     ║
║  [Progress*]       [Est. Date*]       ║
║  [Status*]                            ║
║                                       ║
║  ● Additional Information             ║
║  [Special Instructions]               ║
║                                       ║
║  📋 Order Preview: (if filled)        ║
║  Style: Slim Fit Blue | Qty: 500...   ║
║                                       ║
║  [Cancel]           [➕ Add Order]    ║
╚═══════════════════════════════════════╝
```

---

**Created:** October 28, 2025
**Status:** ✅ Fully Implemented
**Component:** AddOrderModal (Organism)
**Location:** `src/components/organisms/AddOrderModal/`
