import { Injectable } from '@nestjs/common';
import { REQUEST_CONTEXT_ID } from '@nestjs/core/router/request/request-constants';
import axios from 'axios';

const userId = '7b79dbaa3e0341aebe09bd68be622184';
let valueConverted: number;

@Injectable()
export class ExchangeService {
  // constructor() {
  //   let valueConverted: number
  // }

  findConvert(
    amount: number,
    dateRequest: string,
    toConvert: string,
    from: string,
  ) {
    axios
      .get(
        'https://openexchangerates.org/api/historical/' +
          dateRequest +
          '.json?app_id=' +
          userId,
      )
      .then((response) => {
        valueConverted = response.data['rates'][toConvert] * amount; //Pendiente manejar el error
      });
    return valueConverted;
  }
}
