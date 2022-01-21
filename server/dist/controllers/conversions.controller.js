"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversionsController = void 0;
const common_1 = require("@nestjs/common");
const exchange_service_1 = require("./../services/exchange.service");
let ConversionsController = class ConversionsController {
    constructor(exchangeService) {
        this.exchangeService = exchangeService;
    }
    postConvertedAmount(from, toConvert, amount, dateRequest, payload) {
        return this.exchangeService.findConvert(payload.amount, payload.dateRequest, payload.toConvert, payload.from);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Query)('from')),
    __param(1, (0, common_1.Query)('to')),
    __param(2, (0, common_1.Query)('amount')),
    __param(3, (0, common_1.Query)('dateRequest')),
    __param(4, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number, String, Object]),
    __metadata("design:returntype", void 0)
], ConversionsController.prototype, "postConvertedAmount", null);
ConversionsController = __decorate([
    (0, common_1.Controller)('/conversions'),
    __metadata("design:paramtypes", [exchange_service_1.ExchangeService])
], ConversionsController);
exports.ConversionsController = ConversionsController;
//# sourceMappingURL=conversions.controller.js.map