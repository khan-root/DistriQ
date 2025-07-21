import { Module } from '@nestjs/common';
import { DistributorController } from './distributor.controller';

@Module({
  controllers: [DistributorController],
  providers: [],
  exports: [],
})
export class DistributorModule {}
