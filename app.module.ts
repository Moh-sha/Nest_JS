import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { AdminControllerdup } from './admindup.controller';
import { ParamController } from './param.controller';
import { QueryController } from './query.controller';
@Module({
  imports: [],
  controllers: [
    UserController,
    AdminControllerdup,
    ParamController,
    QueryController,
  ],
  providers: [],
})
export class AppModule {}
