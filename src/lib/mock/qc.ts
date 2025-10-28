import type { QCRecord, ReworkRecord } from '@/utils/types/QC';

let qcRecords: QCRecord[] = [
  {
    id: 'qc-1',
    productId: 'fg-1',
    inspectorId: 'u-1',
    status: 'pass',
    defects: [],
    reworkNeeded: false,
    timestamp: new Date().toISOString(),
  },
  {
    id: 'qc-2',
    productId: 'fg-2',
    inspectorId: 'u-2',
    status: 'fail',
    defects: [{ description: 'Button placement off', severity: 'minor' }],
    reworkNeeded: true,
    timestamp: new Date().toISOString(),
  },
];

let reworks: ReworkRecord[] = [
  {
    id: 'rw-1',
    qcRecordId: 'qc-2',
    productId: 'fg-2',
    description: 'Fix button placement and re-inspect',
    status: 'open',
    assignedTo: 'tailor-1',
    createdAt: new Date().toISOString(),
  },
];

const wait = (ms = 150) => new Promise((res) => setTimeout(res, ms));

export async function getQCRecords(): Promise<QCRecord[]> {
  await wait();
  return qcRecords.slice();
}

export async function createQCRecord(payload: Partial<QCRecord>): Promise<QCRecord> {
  await wait();
  const r: QCRecord = {
    id: `qc-${Date.now()}`,
    productId: payload.productId || 'unknown',
    inspectorId: payload.inspectorId,
    status: payload.status || 'pass',
    defects: payload.defects || [],
    reworkNeeded: payload.reworkNeeded || false,
    timestamp: new Date().toISOString(),
  };
  qcRecords.unshift(r);
  return r;
}

export async function getReworks(): Promise<ReworkRecord[]> {
  await wait();
  return reworks.slice();
}

export async function createRework(payload: Partial<ReworkRecord>): Promise<ReworkRecord> {
  await wait();
  const rw: ReworkRecord = {
    id: `rw-${Date.now()}`,
    qcRecordId: payload.qcRecordId || '',
    productId: payload.productId || '',
    description: payload.description || '',
    status: payload.status || 'open',
    assignedTo: payload.assignedTo,
    createdAt: new Date().toISOString(),
  };
  reworks.unshift(rw);
  return rw;
}
