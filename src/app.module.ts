import { Module } from '@nestjs/common';
import { AlbumsController } from "./albums.controller";
import { usersController } from './users.controller';


@Module({
  imports: [],
  controllers: [usersController, AlbumsController],

})
export class AppModule {}
