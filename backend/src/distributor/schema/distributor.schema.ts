import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({ timestamps: true })
export class Distributor {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  user: Types.ObjectId;

  @Prop({ required: true })
  businessName: string;

  @Prop({ required: true })
  businessAddress: string;

  @Prop({ required: true })
  businessPhone: string;

  @Prop({ required: true, default: false })
  isActive: boolean;

  @Prop({ required: true, default: false })
  isVerified: boolean;

  @Prop({ required: true })
  subscriptionPlan: string;

  @Prop({ required: true })
  subscriptionStartDate: Date;

  @Prop({ required: true })
  subscriptionEndDate: Date;

  @Prop({ required: true, default: false })
  isSubscribed: boolean;

  @Prop({ required: true, default: false })
  isPaid: boolean;

  @Prop({ type: Types.ObjectId, ref: 'WareHouse', required: true })
  wareHouse: Types.ObjectId;
}

export type DistributorDocument = Distributor & Document;
export const DistributorSchema = SchemaFactory.createForClass(Distributor);
