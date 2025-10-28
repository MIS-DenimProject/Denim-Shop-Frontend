export interface Material {
  id: string;
  sku: string;
  name: string;
  category: string;
  unit: string;
  quantityOnHand: number;
  reorderLevel: number;
  value?: number;
  supplier?: string;
  lastRestocked?: string;
  location?: string;
  lastUpdated?: string;
}

export interface FinishedGood {
  id: string;
  sku: string;
  name: string;
  size?: string;
  color?: string;
  quantityOnHand: number;
  reorderLevel: number;
  lastUpdated?: string;
}

export interface StockMovement {
  id: string;
  itemId: string;
  itemType: 'material' | 'finished';
  change: number;
  reason?: string;
  timestamp: string;
}

export interface ConsumptionRecord {
  id: string;
  productionId?: string;
  materialId: string;
  quantityUsed: number;
  unit: string;
  timestamp: string;
}
