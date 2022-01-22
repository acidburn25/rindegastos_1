import { Controller, Get, Post, Query, Body } from '@nestjs/common';

import { ExchangeService } from './../services/exchange.service';

@Controller('/conversions')
export class ConversionsController {
  constructor(public exchangeService: ExchangeService) {}

  @Get()
  getConvertedAmount(
    @Query('from') from: string,
    @Query('to') toConvert: string,
    @Query('amount') amount: number,
    @Query('dateRequest') dateRequest: string,
  ) {
    return this.exchangeService.findConvert(amount, dateRequest, toConvert, from)
  }
}