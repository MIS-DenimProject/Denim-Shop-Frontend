import { useEffect, useState } from 'react';
import type { QCRecord, ReworkRecord } from '@/utils/types/QC';
import { getQCRecords, createQCRecord, getReworks, createRework } from '@/lib/mock/qc';

export function useQC() {
  const [records, setRecords] = useState<QCRecord[]>([]);
  const [reworks, setReworks] = useState<ReworkRecord[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    try {
      const [r, rw] = await Promise.all([getQCRecords(), getReworks()]);
      setRecords(r);
      setReworks(rw);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return {
    records,
    reworks,
    loading,
    refresh: load,
    createRecord: async (payload: Partial<QCRecord>) => {
      const r = await createQCRecord(payload);
      setRecords((s) => [r, ...s]);
      return r;
    },
    createRework: async (payload: Partial<ReworkRecord>) => {
      const rw = await createRework(payload);
      setReworks((s) => [rw, ...s]);
      return rw;
    }
  };
}
