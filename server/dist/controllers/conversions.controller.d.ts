import { ExchangeService } from './../services/exchange.service';
export declare class ConversionsController {
    exchangeService: ExchangeService;
    constructor(exchangeService: ExchangeService);
    getConvertedAmount(from: string, toConvert: string, amount: number, dateRequest: string): Promise<string>;
}
