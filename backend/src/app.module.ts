import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DistributorModule } from './distributor/distributor.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { AgentModule } from './agent/agent.module';
import { StoreModule } from './store/store.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoConfigService } from './config/db.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useClass: MongoConfigService,
    }),
    DistributorModule,
    AuthModule,
    UserModule,
    AgentModule,
    StoreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
