import { IBaseEntity } from "./base.entity";

export interface IIntegrationSourceDataPoint extends IBaseEntity{
	id?: string;
	date: string;
	integration_data: Record<string, unknown>;
}


