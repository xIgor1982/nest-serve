import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface KotelnayaCreateionAttrs {
	kot_name: string;
	kot_address: string;
	kot_ip: string;
}

@Table({ tableName: 'Kotelnaya' })
export class Kotelnaya extends Model<Kotelnaya, KotelnayaCreateionAttrs> {
	@Column({
		type: DataType.INTEGER,
		unique: true,
		autoIncrement: true,
		primaryKey: true,
	})
	id_kotelnaya: number;

	@Column({
		type: DataType.STRING,
		unique: true,
		allowNull: false,
	})
	kot_name: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	kot_address: string;

	@Column({
		type: DataType.STRING,
		unique: true,
		allowNull: false,
	})
	kot_ip: string;

	@Column({
		type: DataType.STRING,
		allowNull: true,
		defaultValue: '---',
	})
	kot_port: string;
}
