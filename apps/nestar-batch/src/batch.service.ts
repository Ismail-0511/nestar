import { Injectable } from '@nestjs/common';

@Injectable()
export class BatchService {

  public async batchRollback(): Promise<void> {}

  public async batchProperties(): Promise<void> {}

  public async batchAgents(): Promise<void> {}

  public getHello(): string {
    return 'Welcome to Nestar Batch Server!'
  }
}
