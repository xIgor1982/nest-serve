import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateKotelnayaDto } from './dto/create-kotelnaya.dto';
import { Kotelnaya } from './kotelnaya.model';

@Injectable()
export class KotelnayaService {

	constructor(@InjectModel(Kotelnaya) private kotelnayaRepository: typeof Kotelnaya){}

	async createKotelnaya(dto: CreateKotelnayaDto) {
		const kotelnaya = await this.kotelnayaRepository.create(dto);
		return kotelnaya;
	}

	async getAllKotelnaya() {
		const kotelnaya = await this.kotelnayaRepository.findAll();
		return kotelnaya;
	}
}
