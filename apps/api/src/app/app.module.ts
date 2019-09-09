import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './modules/account/account.module';
import { ProfileModule } from './modules/profile/profile.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './modules/account/data/entities/account.entity';
import { Profile } from './modules/profile/data/entities/profile.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'nxtsconfigbug',
      entities: [Account, Profile],
      synchronize: true,
    }),
    AccountModule, 
    ProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
