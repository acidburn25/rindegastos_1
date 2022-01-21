import { ExchangeService } from './../services/exchange.service';
export declare class ConversionsController {
    exchangeService: ExchangeService;
    constructor(exchangeService: ExchangeService);
    postConvertedAmount(from: string, toConvert: string, amount: number, dateRequest: string, payload: any): number;
}
