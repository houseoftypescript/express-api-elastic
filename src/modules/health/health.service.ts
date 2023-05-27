import { ClusterHealthResponse } from '@elastic/elasticsearch/lib/api/types';
import { elasticSearchClient } from '../../common/libs/elastic';

class HealthService {
  async getHealth(): Promise<Pick<ClusterHealthResponse, 'status'>> {
    const clusterHealthResponse = await elasticSearchClient.healthCheck();
    const { status } = clusterHealthResponse;
    return { status };
  }
}

export const healthService = new HealthService();
