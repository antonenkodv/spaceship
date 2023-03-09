import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { TypeModule } from '../enums/types-module.enum';
import { Vendor } from '../enums/vendors.enum';

export type ScannerDocument = HydratedDocument<Scanner>;

@Schema({ timestamps: true })
export class Scanner {
  @Prop({ type: String, required: true, unique: true })
  name: string;

  @Prop({ type: String, required: true, enum: Vendor })
  vendor: string;

  @Prop({ type: String, required: true, enum: TypeModule })
  type: string;

  @Prop({ type: Number, required: true })
  weight: number;

  @Prop({ type: Number, required: true })
  price: number;

  @Prop({ type: Date, required: false })
  createdAt?: Date;

  @Prop({ type: Date, required: false })
  updatedAt?: Date;
}

export const ScannerSchema = SchemaFactory.createForClass(Scanner);
