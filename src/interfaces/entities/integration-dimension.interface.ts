import { IBaseEntity } from './base.entity';

export interface IIntegrationDimension extends IBaseEntity {
  id?: number;
  external_id: string;
  name: string;
  type: 'string' | 'int' | 'time' | 'float' | 'date';
}
