import { MetricClient } from '@clients/metric-client';
import { HttpService } from '@services/http.service';
import { DimensionsClient } from '@clients/dimensions-client';
import { IntegrationSourceDataClient } from '@clients/integration-source-data-client';

class WgClient {
  constructor(private key: string) {}

  metrics() {
    return new MetricClient(
      new HttpService(this.key, `/v1/integration-metrics`),
    );
  }

  dimensions() {
    return new DimensionsClient(
      new HttpService(this.key, `/v1/integration-dimensions`),
    );
  }

  integrationSourceDataPoints() {
    return new IntegrationSourceDataClient(
      new HttpService(this.key, `/v1/integration-source-data`),
    );
  }
}

export default WgClient;
