import { Controller, Get, Post, Query, Body } from '@nestjs/common';

import { ExchangeService } from './../services/exchange.service';

@Controller('/conversions')
export class ConversionsController {
  constructor(public exchangeService: ExchangeService) {}

  @Post()
  postConvertedAmount(
    @Query('from') from: string,
    @Query('to') toConvert: string,
    @Query('amount') amount: number,
    @Query('dateRequest') dateRequest: string,
    @Body()
    payload: any,
  ) {
    return this.exchangeService.findConvert(
      payload.amount,
      payload.dateRequest,
      payload.toConvert,
      payload.from,
    );
  }

  /*@Get()
  getConvertedAmount(
    @Query('from') from: string,
    @Query('to') toConvert: string,
    @Query('amount') amount: number,
    @Query('dateRequest') dateRequest: string,
  ) {
    //return `Quiero convertir ${amount} a ${to} para la fecha ${dateRequest}`;
    return this.exchangeService.findConvert(amount, dateRequest, toConvert, from)
  }*/
}
