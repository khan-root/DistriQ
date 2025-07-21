import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

enum EmploymentType {
  FULL_TIME = 'full_time',
  PART_TIME = 'part_time',
  CONTRACT = 'contract',
  FREELANCE = 'freelance',
}

@Schema({ timestamps: true })
export class Agent {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  user: Types.ObjectId;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  code: string;

  @Prop({ type: Types.ObjectId, ref: 'Distributor', required: true })
  distributor_id: Types.ObjectId;

  @Prop({ required: true, default: false })
  isActive: boolean;

  @Prop({ required: true, default: false })
  isVerified: boolean;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  joinDate: Date;

  @Prop({
    required: true,
    enum: EmploymentType,
    default: EmploymentType.FULL_TIME,
  })
  employmentType: EmploymentType;
}

export type AgentDocument = Agent & Document;
export const AgentSchema = SchemaFactory.createForClass(Agent);
