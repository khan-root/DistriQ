import { Prop } from '@nestjs/mongoose';
import { IsBoolean, IsMongoId, IsNotEmpty, IsString } from 'class-validator';
import { TransformDateToTimestamp } from 'src/common/transformers/date-to-timestamp.transform';

export class CreateDistributorDto {
  @IsNotEmpty()
  @IsMongoId()
  @Prop({ required: true })
  user: string;

  @IsNotEmpty()
  @IsString()
  @Prop({ required: true })
  businessName: string;

  @IsNotEmpty()
  @IsString()
  @Prop({ required: true })
  businessAddress: string;

  @IsNotEmpty()
  @IsString()
  @Prop({ required: true })
  businessPhone: string;

  @IsNotEmpty()
  @IsBoolean()
  @Prop({ required: true })
  isActive: boolean;

  @IsNotEmpty()
  @IsBoolean()
  @Prop({ required: true })
  isVerified: boolean;

  @IsNotEmpty()
  @IsString()
  @Prop({ required: true })
  subscriptionPlan: string;

  @IsNotEmpty()
  @TransformDateToTimestamp()
  @Prop({ required: true })
  subscriptionStartDate: number;

  @IsNotEmpty()
  @TransformDateToTimestamp()
  @Prop({ required: true })
  subscriptionEndDate: number;

  @IsNotEmpty()
  @IsBoolean()
  @Prop({ required: true, default: false })
  isSubscribed: boolean;

  @IsNotEmpty()
  @IsBoolean()
  @Prop({ required: true, default: false })
  isPaid: boolean;
}
