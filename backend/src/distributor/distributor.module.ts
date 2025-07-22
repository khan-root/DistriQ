import { Module } from '@nestjs/common';
import { DistributorController } from './distributor.controller';
import { DistributorService } from './distributor.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Distributor, DistributorSchema } from './schema/distributor.schema';
import { User } from 'src/user/schema/user.schema';
import { UserSchema } from 'src/user/schema/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Distributor.name, schema: DistributorSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  controllers: [DistributorController],
  providers: [DistributorService],
  exports: [],
})
export class DistributorModule {}
