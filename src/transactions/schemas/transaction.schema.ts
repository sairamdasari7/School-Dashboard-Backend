import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Transaction extends Document {
  @Prop() collect_id!: string;
  @Prop() school_id!: string;
  @Prop() gateway!: string;
  @Prop() order_amount!: number;
  @Prop() transaction_amount!: number;
  @Prop() status!: string;
  @Prop() custom_order_id!: string;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
