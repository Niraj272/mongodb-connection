import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    UsersModule,
    AuthModule,
    //database url string
    MongooseModule.forRoot('mongodb://localhost:27017/myApp')],
  controllers: [],
  providers: [],
})
export class AppModule { }


