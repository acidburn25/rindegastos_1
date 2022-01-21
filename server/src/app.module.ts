import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConversionsController } from './controllers/conversions.controller';
import { ExchangeService } from './services/exchange.service';

@Module({
  imports: [],
  controllers: [AppController, ConversionsController],
  providers: [AppService, ExchangeService],
})
export class AppModule {}
