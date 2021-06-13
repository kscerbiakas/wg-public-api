import { AccumulatorType, MetricType } from "../type-aliases";
import { IBaseEntity } from "./base.entity";

interface IIntegrationMetricOptions {
	accumulator: AccumulatorType
}

export interface IIntegrationMetric extends IBaseEntity{
	id?: number;
	external_id: string;
	name: string;
	type: MetricType;
	negative_ratio: boolean;
	options: IIntegrationMetricOptions;
}

