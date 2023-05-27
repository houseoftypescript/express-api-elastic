import { HealthController } from '../health.controller';

jest.mock('../../../common/libs/elastic', () => {
  return {
    elasticSearchClient: { healthCheck: jest.fn().mockResolvedValue({ status: 'OK' }) },
  };
});

describe('HealthController', () => {
  const healthController: HealthController = new HealthController();

  describe('/health', () => {
    it('should return status OK', async () => {
      const response = await healthController.getHealth();
      expect(response).toEqual({ status: 'OK' });
    });
  });
});
