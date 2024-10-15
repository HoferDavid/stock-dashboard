import { Injectable } from '@angular/core';
import { OverviewWidget } from '../interfaces/overview';

@Injectable()
export class OverviewService {
  widgets: OverviewWidget[] = [
    {
      id: 1,
      ticker: 'AAPL',
      logo: 'apple.svg',
    },
    {
      id: 2,
      ticker: 'AMZN',
      logo: 'amazon.svg',
    },
    {
      id: 3,
      ticker: 'NVDA',
      logo: 'nvidia.svg',
    },
    {
      id: 4,
      ticker: 'MSFT',
      logo: 'microsoft.svg',
    },
    {
      id: 5,
      ticker: 'TSLA',
      logo: 'tesla.svg',
    },
    {
      id: 6,
      ticker: 'GOOGL',
      logo: 'google.svg',
    },
    {
      id: 7,
      ticker: 'PLTR',
      logo: 'palantir.svg',
    },
  ];

  constructor() {}
}
