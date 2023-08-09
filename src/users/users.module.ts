import { Module } from "@nestjs/common";
import { AccountsController } from "./controllers/accounts.controller";
import { UsersController } from "./controllers/users.controller";
import { UsersService } from "./services/users.service";
import { CacheStoreModule } from "src/cache-store";


@Module({

  imports: [
    // create a dynamic module with below option
    CacheStoreModule.register({
      storeName: "users",
    }),
  ],
  
    controllers: [UsersController, AccountsController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}