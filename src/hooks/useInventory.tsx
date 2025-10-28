import { useEffect, useState } from 'react';
import type { Material } from '@/utils/types/Inventory';
import { getMaterials, moveMaterial, createMaterial, getReorderAlerts, recordConsumption } from '@/lib/mock/inventory';

export function useInventory() {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    try {
      const data = await getMaterials();
      setMaterials(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return {
    materials,
    loading,
    refresh: load,
    createMaterial: async (payload: Partial<Material>) => {
      const m = await createMaterial(payload);
      setMaterials((s) => [m, ...s]);
      return m;
    },
    moveMaterial: async (itemId: string, change: number, reason?: string) => {
      const mv = await moveMaterial(itemId, change, reason);
      // optimistic local refresh
      setMaterials(await getMaterials());
      return mv;
    },
    getReorderAlerts: async () => {
      return getReorderAlerts();
    },
    recordConsumption: async (payload: { materialId: string; quantityUsed: number; unit?: string; productionId?: string }) => {
      const r = await recordConsumption(payload);
      setMaterials(await getMaterials());
      return r;
    }
  };
}
