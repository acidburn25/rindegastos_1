"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const userId = '7b79dbaa3e0341aebe09bd68be622184';
let valueConverted;
let ExchangeService = class ExchangeService {
    async findConvert(amount, dateRequest, toConvert, from) {
        const response = await axios_1.default.get('https://openexchangerates.org/api/historical/' +
            dateRequest +
            '.json?app_id=' +
            userId);
        valueConverted = response.data['rates'][toConvert] * amount;
        return valueConverted.toFixed(2);
    }
};
ExchangeService = __decorate([
    (0, common_1.Injectable)()
], ExchangeService);
exports.ExchangeService = ExchangeService;
//# sourceMappingURL=exchange.service.js.map