import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from './users/users.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User],
  synchronize: true, // ⚠️ désactiver en prod si tu veux gérer les migrations

  ssl: process.env.DB_SSL === 'true'
    ? { rejectUnauthorized: false }
    : false,
};
