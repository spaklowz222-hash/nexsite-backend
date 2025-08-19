import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL, // Render injectera cette variable
      autoLoadEntities: true,        // Charge automatiquement les entités
      synchronize: true,             // ⚠️ crée/modifie les tables automatiquement (mettre false en prod + utiliser migrations)
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

