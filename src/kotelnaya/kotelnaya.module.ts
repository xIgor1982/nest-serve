import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { KotelnayaController } from './kotelnaya.controller';
import { Kotelnaya } from './kotelnaya.model';
import { KotelnayaService } from './kotelnaya.service';

@Module({
  controllers: [KotelnayaController],
  providers: [KotelnayaService],
  imports: [
    SequelizeModule.forFeature([Kotelnaya])
  ]
})
export class KotelnayaModule {}
