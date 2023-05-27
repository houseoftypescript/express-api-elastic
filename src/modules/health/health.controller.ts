import { ClusterHealthResponse } from '@elastic/elasticsearch/lib/api/types';
import { Controller, Get, Route, SuccessResponse, Tags } from 'tsoa';
import { healthService } from './health.service';

@Route('/health')
@Tags('Health')
export class HealthController extends Controller {
  @SuccessResponse('Health Check', 'Health Check')
  @Get()
  async getHealth(): Promise<Pick<ClusterHealthResponse, 'status'>> {
    return healthService.getHealth();
  }
}
