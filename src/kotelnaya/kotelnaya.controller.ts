import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateKotelnayaDto } from './dto/create-kotelnaya.dto';
import { KotelnayaService } from './kotelnaya.service';

@Controller('kotelnaya')
export class KotelnayaController {
	constructor (private kotelnayaService: KotelnayaService) {}

	@Post()
	create(@Body() userDto: CreateKotelnayaDto){
		return this.kotelnayaService.createKotelnaya(userDto);
	}

	@Get()
	getAll() {
		return this.kotelnayaService.getAllKotelnaya()
	}
}
