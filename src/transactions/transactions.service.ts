import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transaction } from './schemas/transaction.schema';
import { CreateTransactionDto, UpdateTransactionDto } from './dto';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction.name) private transactionModel: Model<Transaction>,
  ) {}

  async findAll() {
    return this.transactionModel.find().exec();
  }

  async findBySchool(schoolId: string) {
    return this.transactionModel.find({ school_id: schoolId }).exec();
  }

  async findStatus(customOrderId: string) {
    return this.transactionModel
      .findOne({ custom_order_id: customOrderId })
      .exec();
  }

  async create(createTransactionDto: CreateTransactionDto) {
    const createdTransaction = new this.transactionModel(createTransactionDto);
    return createdTransaction.save();
  }

  async updateStatus(
    customOrderId: string,
    updateTransactionDto: UpdateTransactionDto,
  ) {
    return this.transactionModel.updateOne(
      { custom_order_id: customOrderId },
      updateTransactionDto,
    );
  }
}
