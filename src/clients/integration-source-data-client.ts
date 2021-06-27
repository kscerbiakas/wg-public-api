import { Client } from './abstract-client';
import { IIntegrationSourceDataPoint } from "../interfaces";

export class IntegrationSourceDataClient extends Client<IIntegrationSourceDataPoint> {
  async post(
    body: IIntegrationSourceDataPoint,
  ): Promise<IIntegrationSourceDataPoint> {
    const { integration_data, ...newEntity } = body;

    return this.httpService.post<IIntegrationSourceDataPoint>({
      ...newEntity,
      data: [integration_data],
    });
  }

  async update(id: number | string, body: IIntegrationSourceDataPoint) {
    const { integration_data, ...newEntity } = body;

    return this.httpService.put<IIntegrationSourceDataPoint>(
      { id },
      { ...newEntity, data: integration_data },
    );
  }
}
