import { Client } from './abstract-client';
import { IIntegrationMetric } from '../interfaces';

export class MetricClient extends Client<IIntegrationMetric> {
  async post(metric: IIntegrationMetric): Promise<IIntegrationMetric> {
    return this.httpService.post<IIntegrationMetric>(
      this.prepMetricBodyForRequest(metric),
    );
  }

  async update(
    id: string | number,
    metric: IIntegrationMetric,
  ): Promise<IIntegrationMetric> {
    return this.httpService.put(
      { id: id },
      this.prepMetricBodyForRequest(metric),
    );
  }

  private prepMetricBodyForRequest(entity: IIntegrationMetric) {
    if (entity.options) {
      return { ...entity, accumulator: entity.options.accumulator };
    }
    return entity;
  }
}
