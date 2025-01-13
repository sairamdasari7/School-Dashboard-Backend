import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TransactionsModule } from './transactions/transactions.module';
import { MONGO_URI } from './config/database.config';

@Module({
  imports: [MongooseModule.forRoot(MONGO_URI), TransactionsModule],
})
export class AppModule {}
