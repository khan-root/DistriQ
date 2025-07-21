import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';

@Injectable()
export class MongoConfigService implements MongooseOptionsFactory {
  constructor(private configService: ConfigService) {}

  createMongooseOptions():
    | Promise<MongooseModuleOptions>
    | MongooseModuleOptions {
    try {
      const uri = this.configService.get<string>('MONGO_URI');
      return {
        uri,
      };
    } catch (error) {
      throw new Error('Failed to connect to MongoDB', error);
    }
  }
}
