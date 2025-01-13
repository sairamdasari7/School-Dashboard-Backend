import { Controller, Get, Post, Body, Query, Put } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto, UpdateTransactionDto } from './dto';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get()
  async getAllTransactions() {
    return this.transactionsService.findAll();
  }

  @Get('by-school')
  async getTransactionsBySchool(@Query('school_id') schoolId: string) {
    return this.transactionsService.findBySchool(schoolId);
  }

  @Post('check-status')
  async checkStatus(@Body('custom_order_id') customOrderId: string) {
    return this.transactionsService.findStatus(customOrderId);
  }

  @Post()
  async createTransaction(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionsService.create(createTransactionDto);
  }

  @Put('update-status')
  async updateTransactionStatus(
    @Body('custom_order_id') customOrderId: string,
    @Body() updateTransactionDto: UpdateTransactionDto,
  ) {
    return this.transactionsService.updateStatus(
      customOrderId,
      updateTransactionDto,
    );
  }
}
