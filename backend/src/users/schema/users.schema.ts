import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

enum Role {
  ADMIN = 'admin',
  DISTRIBUTOR = 'distributor',
  AGENT = 'agent',
  CUSTOMER = 'customer',
}

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, enum: Role, default: Role.CUSTOMER })
  role: Role;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
