export interface ManagerProjectSummary {
  id: string;
  name: string;
  startDate: string;
  dueDate: string;
  status: string;
  employees: number;
  details?: Record<string, unknown>;
}
