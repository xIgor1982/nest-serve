import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from '@nestjs/sequelize';
import { Kotelnaya } from "./kotelnaya/kotelnaya.model";
import { KotelnayaModule } from './kotelnaya/kotelnaya.module';

@Module({
	controllers: [],
	providers: [],
	imports: [
		ConfigModule.forRoot({
			// envFilePath: `.${process.env.NODE_ENV}.env`,
			envFilePath: `.env`,
		}),
		SequelizeModule.forRoot({
			dialect: 'postgres',
			host: process.env.POSTGRES_HOST,
			port: Number(process.env.POSTGRES_PORT),
			username: process.env.POSTGRES_USER,
			password: process.env.POSTGRES_PASSWORD,
			database: process.env.POSTGRES_DB,
			models: [Kotelnaya],
			autoLoadModels: true,
		}),
		KotelnayaModule,
	],
})
export class AppModule {}