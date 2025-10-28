import type { Material, FinishedGood, StockMovement, ConsumptionRecord } from '@/utils/types/Inventory';

// Simple in-memory mock data for frontend-only implementation
let materials: Material[] = [
  {
    id: 'm-1',
    sku: 'DEN-001',
    name: 'Raw Denim Fabric',
    category: 'Raw Material',
    unit: 'meters',
    quantityOnHand: 45,
    reorderLevel: 100,
    value: 562.5,
    supplier: 'Premium Fabrics Co.',
    lastRestocked: '2025-10-15',
    location: 'Warehouse A',
    lastUpdated: new Date().toISOString(),
  },
  {
    id: 'm-2',
    sku: 'BTN-045',
    name: 'Metal Buttons',
    category: 'Hardware',
    unit: 'pieces',
    quantityOnHand: 850,
    reorderLevel: 1000,
    value: 127.5,
    supplier: 'Button Masters Ltd.',
    lastRestocked: '2025-10-10',
    location: 'Warehouse B',
    lastUpdated: new Date().toISOString(),
  },
  {
    id: 'm-3',
    sku: 'THR-089',
    name: 'Sewing Thread',
    category: 'Materials',
    unit: 'spools',
    quantityOnHand: 12,
    reorderLevel: 20,
    value: 102,
    supplier: 'Thread & Co.',
    lastRestocked: '2025-10-05',
    location: 'Warehouse A',
    lastUpdated: new Date().toISOString(),
  },
];

// Add more mock items to match screenshot-like list
materials.push(
  {
    id: 'm-4',
    sku: 'DEN-002',
    name: 'Blue Denim Fabric',
    category: 'Raw Material',
    unit: 'meters',
    quantityOnHand: 280,
    reorderLevel: 150,
    value: 3080,
    supplier: 'Premium Fabrics Co.',
    lastRestocked: '2025-10-20',
    location: 'Warehouse A',
    lastUpdated: new Date().toISOString(),
  },
  {
    id: 'm-5',
    sku: 'ZIP-007',
    name: 'Metal Zippers 7-inch',
    category: 'Hardware',
    unit: 'pieces',
    quantityOnHand: 1200,
    reorderLevel: 800,
    value: 900,
    supplier: 'Zipper World',
    lastRestocked: '2025-10-18',
    location: 'Warehouse B',
    lastUpdated: new Date().toISOString(),
  },
  {
    id: 'm-6',
    sku: 'RIV-001',
    name: 'Rivets (Copper)',
    category: 'Hardware',
    unit: 'pieces',
    quantityOnHand: 3500,
    reorderLevel: 2000,
    value: 175,
    supplier: 'Metal Works Inc.',
    lastRestocked: '2025-10-22',
    location: 'Warehouse B',
    lastUpdated: new Date().toISOString(),
  },
  {
    id: 'm-7',
    sku: 'FG-001',
    name: 'Slim Fit Blue Jeans',
    category: 'Finished Goods',
    unit: 'pieces',
    quantityOnHand: 245,
    reorderLevel: 100,
    value: 4410,
    supplier: 'Production',
    lastRestocked: '2025-10-23',
    location: 'Showroom',
    lastUpdated: new Date().toISOString(),
  }
);

let finished: FinishedGood[] = [];

let movements: StockMovement[] = [];
let consumption: ConsumptionRecord[] = [];

const wait = (ms = 200) => new Promise((res) => setTimeout(res, ms));

export async function getMaterials(): Promise<Material[]> {
  await wait();
  return materials.slice();
}

export async function getFinishedGoods(): Promise<FinishedGood[]> {
  await wait();
  return finished.slice();
}

export async function createMaterial(payload: Partial<Material>): Promise<Material> {
  await wait();
  const m: Material = {
    id: `m-${Date.now()}`,
    sku: payload.sku || `SKU-${Date.now()}`,
    name: payload.name || 'New Material',
    category: payload.category || 'other',
    unit: payload.unit || 'pcs',
    quantityOnHand: payload.quantityOnHand || 0,
    reorderLevel: payload.reorderLevel || 0,
    location: payload.location || 'Unassigned',
    lastUpdated: new Date().toISOString(),
  };
  materials.unshift(m);
  return m;
}

export async function moveMaterial(itemId: string, change: number, reason?: string): Promise<StockMovement> {
  await wait();
  const mat = materials.find((m) => m.id === itemId);
  if (!mat) throw new Error('Material not found');
  mat.quantityOnHand = Math.max(0, mat.quantityOnHand + change);
  mat.lastUpdated = new Date().toISOString();
  const mv: StockMovement = {
    id: `sm-${Date.now()}`,
    itemId,
    itemType: 'material',
    change,
    reason,
    timestamp: new Date().toISOString(),
  };
  movements.unshift(mv);
  return mv;
}

export async function getReorderAlerts(): Promise<Material[]> {
  await wait();
  return materials.filter((m) => m.quantityOnHand <= m.reorderLevel);
}

export async function recordConsumption(record: Partial<ConsumptionRecord>): Promise<ConsumptionRecord> {
  await wait();
  const r: ConsumptionRecord = {
    id: `c-${Date.now()}`,
    productionId: record.productionId,
    materialId: record.materialId!,
    quantityUsed: record.quantityUsed || 0,
    unit: record.unit || 'pcs',
    timestamp: new Date().toISOString(),
  };
  consumption.unshift(r);
  // deduct from material
  const mat = materials.find((m) => m.id === r.materialId);
  if (mat) {
    mat.quantityOnHand = Math.max(0, mat.quantityOnHand - r.quantityUsed);
    mat.lastUpdated = new Date().toISOString();
  }
  return r;
}
