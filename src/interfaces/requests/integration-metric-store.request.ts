import { AccumulatorType } from '../type-aliases';

export interface IIntegrationMetricStoreRequest {
  id?: number;
  external_id: string;
  name: string;
  type: 'int' | 'float' | 'money';
  negative_ratio: boolean;
  accumulator: AccumulatorType;
}
