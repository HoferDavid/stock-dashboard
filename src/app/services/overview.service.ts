import { Injectable } from '@angular/core';
import { OverviewWidget } from '../interfaces/overview';

@Injectable()
export class OverviewService {
  widgets: OverviewWidget[] = [
    {
      id: 1,
      ticker: 'AAPL',
      logo: 'apple.svg',
      backgroundColor: '#003f5c',
      color: 'whitesmoke',
    },
    {
      id: 2,
      ticker: 'AMZN',
      logo: 'amazon.svg',
      backgroundColor: '#003f5c',
      color: 'whitesmoke',
    },
    {
      id: 3,
      ticker: 'NVDA',
      logo: 'nvidia.svg',
      backgroundColor: '#003f5c',
      color: 'whitesmoke',
    },
    {
      id: 4,
      ticker: 'MSFT',
      logo: 'microsoft.svg',
      backgroundColor: '#003f5c',
      color: 'whitesmoke',
    },
    {
      id: 5,
      ticker: 'TSLA',
      logo: 'tesla.svg',
      backgroundColor: '#003f5c',
      color: 'whitesmoke',
    },
    {
      id: 6,
      ticker: 'GOOGL',
      logo: 'google.svg',
      backgroundColor: '#003f5c',
      color: 'whitesmoke',
    },
    {
      id: 7,
      ticker: 'PLTR',
      logo: 'palantir.svg',
      backgroundColor: '#003f5c',
      color: 'whitesmoke',
    },
  ];

  constructor() {}
}
