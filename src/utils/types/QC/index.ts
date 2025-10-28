export interface QCDefect {
  code?: string;
  description: string;
  severity?: 'minor' | 'major' | 'critical';
}

export interface QCRecord {
  id: string;
  productId: string;
  inspectorId?: string;
  status: 'pass' | 'fail';
  defects?: QCDefect[];
  reworkNeeded?: boolean;
  reworkId?: string;
  timestamp: string;
}

export interface ReworkRecord {
  id: string;
  qcRecordId: string;
  productId: string;
  description: string;
  status: 'open' | 'in-progress' | 'done';
  assignedTo?: string;
  createdAt: string;
  closedAt?: string;
}
