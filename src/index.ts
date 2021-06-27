import { DimensionsClient, IntegrationSourceDataClient, MetricClient } from "./clients";
import { HttpService } from "./services/http.service";

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
