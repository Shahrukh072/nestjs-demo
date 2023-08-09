import { Module } from "@nestjs/common";
import { JobsController } from "./controllers/jobs.controller";
import { OfficeController } from "./controllers/office.controller";
import { JobsService } from "./services/jobs.service";
// import { CacheStoreModule, StoreType } from "src/cache-store";
import { JobsApplicationsModule } from "./jobs-applications/jobs-applications.module";

@Module({
  // NOTE: `JobsApplicationsService` can be injected wherever `JobsModule` is imported
  // because `JobsModule` exports the `JobsApplicationsModule`
  imports: [

    //  // create a dynamic module with below option
    //  CacheStoreModule.register({
    //   storeName: "jobs",
    //   storeType: StoreType.FILE,
    //   storeDir: __dirname, // dist folder
    // }),

    JobsApplicationsModule,
  ],
  controllers: [JobsController, OfficeController],
  providers: [JobsService],
  exports: [JobsService, JobsApplicationsModule],
})
export class JobsModule {}