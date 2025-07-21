import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DistributorModule } from './distributor/distributor.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { AgentModule } from './agent/agent.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DistributorModule,
    AuthModule,
    UserModule,
    AgentModule,
    CustomerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
