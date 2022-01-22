import { Injectable } from '@nestjs/common';

import axios from 'axios';

const userId = '7b79dbaa3e0341aebe09bd68be622184';
let valueConverted: number;

@Injectable()
export class ExchangeService {
  async findConvert(
    amount: number,
    dateRequest: string,
    toConvert: string,
    from: string,
  ) {
    const response = await axios.get(
      'https://openexchangerates.org/api/historical/' +
        dateRequest +
        '.json?app_id=' +
        userId,
    );
    valueConverted = response.data['rates'][toConvert] * amount; //Pendiente manejar el error
    return valueConverted.toFixed(2);
  }
}
