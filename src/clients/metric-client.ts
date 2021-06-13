import { IIntegrationMetric } from "../interfaces";
import { Client } from "./abstract-client";

export class MetricClient extends Client<IIntegrationMetric> {

	async post ( metric: IIntegrationMetric ): Promise<IIntegrationMetric> {
		return this.httpService.post<IIntegrationMetric> (this.buildPostRequest (metric));
	}

	private buildPostRequest ( entity: IIntegrationMetric ) {
		if (entity.options) {
			return {...entity, accumulator: entity.options.accumulator};
		}
		return entity;
	}

}
