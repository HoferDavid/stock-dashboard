export interface OverviewWidget {
  id?: number;
  ticker: string;
  logo: string;
  backgroundColor?: string;
  color?: string;
  data: {
    revenue: number[];
    netIncome: number[];
    grossMargin: number[];
  };
}