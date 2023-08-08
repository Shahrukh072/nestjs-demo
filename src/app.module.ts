import { Module, Scope } from '@nestjs/common';
import { EmployersModule } from "./employers/employers.module";
import { UsersModule } from "./users/users.module";
import { JobsModule } from "./jobs/jobs.module";
import { AuthController, JwtStrategy } from "./auth.controller";
import { AlbumsController } from "./albums.controller";
import { UsersController } from './users/controllers/users.controller';
import { StudentsController } from "./students.controller";
import { UsersStore } from "./users.store";
import { UsersService } from "./users/services/users.service";
import { EnvConfig } from "./config";

// MOCK: database connection
function createConnection(options = {}) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        message: "CONNECTED",
        options,
      });
    }, 5000);
  });
}


@Module({ 

  imports: [UsersModule, JobsModule, EmployersModule],
  
  controllers: [UsersController, StudentsController, AuthController,  AlbumsController],
  providers: [

    UsersService,

    { provide: "STORE", useClass: UsersStore, scope: Scope.TRANSIENT },

    {
      provide: JwtStrategy,
      useClass: JwtStrategy,
      scope: Scope.REQUEST,
    },

      // `string` value provider
      {
        provide: "DATABASE_NAME",
        useValue: "moon_knight",
      },
  
      // `number` value provider
      {
        provide: "API_VERSION",
        useValue: 2,
      },
  
      // `array` value provider
      {
        provide: "MAIL",
        useValue: ["admin@domain.com", "replay@domain.com"],
      },
  
      // `object` value provider
      {
        provide: "CRON_CONFIG",
        useValue: {
          max: 11,
          runOn: "start",
        },
      },
  
      // `object` value provider
  
      // NOTE: injection token can be `class`, `string`, or `symbol`
      // here we are using class as token
      {
        provide: EnvConfig,
        useValue: {
          env: "DEV",
          node: "17",
        },
      },

      {
        provide: "DATABASE_CONNECTION",
        // async provider for database connection
        useFactory: async (options: Record<string, any>) => {
          const connection = await createConnection(options);
  
          return connection;
        },
        inject: ["DB_OPTIONS"],
      },
  
      {
        provide: "DB_OPTIONS",
        useValue: { url: "localhost", user: "admin", password: "pwd" },
      },
  ],
})
export class AppModule {}
