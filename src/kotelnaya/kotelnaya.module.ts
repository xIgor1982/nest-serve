import { Module } from '@nestjs/common';
import { KotelnayaController } from './kotelnaya.controller';
import { KotelnayaService } from './kotelnaya.service';

@Module({
  controllers: [KotelnayaController],
  providers: [KotelnayaService]
})
export class KotelnayaModule {}
