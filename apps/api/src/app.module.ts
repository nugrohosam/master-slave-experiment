import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConnection } from './infrastructure/database';
import { IamModule } from './modules/iam/iam.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      databaseConnection
    ),

    IamModule
  ],
  providers: [],
})

export class AppModule {}
