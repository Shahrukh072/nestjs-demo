import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { CreateUserDTO } from "../dto";
import { UsersService } from "../services/users.service";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDTO) {
    this.usersService.addUser(createUserDto);
    return { message: "USER ADDED" };
  }

  @Get()
  findAllUsers() {
    return this.usersService.getUsers();
  }

  @Get(":id")
  findUser(@Param("id") id: number) {
    return this.usersService.getUser(+id);
  }

  @Put(":id")
  updateUser(@Param("id") id: number, @Body() updateUserDto: CreateUserDTO) {
    this.usersService.updateUser(+id, updateUserDto);
    return { message: "USER UPDATED" };
  }

  @Delete(":id")
  deleteUser(@Param("id") id: number) {
    this.usersService.deleteUser(+id);
    return { message: "USER DELETED" };
  }
}





















// import {
//   Controller,
//   Get,
//   Req,
//   HttpCode,
//   HttpStatus,
//   Res,
//   Post, 
//   Redirect,
//   Param,
//   Body,
//   Put,
//   Delete,
//   Optional,
//   Inject,
// } from '@nestjs/common';
// import { UsersService } from "../services/users.service";
// import { UsersStore } from "../../users.store";
// import { EnvConfig } from "../../config";
// import { of } from 'rxjs';
// import { Request,Response } from 'express';
// import { CreateUserDTO } from '../dto';

// let USERS = [];
// @Controller("/users")
// export class UsersController {

//   constructor(

//     private readonly usersService: UsersService,
    
//     @Inject("STORE") private store: UsersStore,

//     @Optional()
//     private userStore: UsersStore,

//     @Inject("DATABASE_NAME") private dbname: string,

//     @Inject("API_VERSION") private apiV: number,

//     @Inject("MAIL") private emails: string[],

//     @Inject("CRON_CONFIG") private cron: Record<string, any>,

//     @Inject("DATABASE_CONNECTION") private dbConn: Record<string, any>,

//     private config: EnvConfig // no need to use @Inject, because injection token is a class `EnvConfig`
//   ) 
//   {
//     console.log("Inside [UsersController]");

//     console.log("No instance of UsersStore", this.userStore);

//     console.log("Inside [UsersController]:");

//     console.log("String value (Database name): ", this.dbname);

//     console.log("Number value (Api version): ", this.apiV);

//     console.log("Array value (Mails): ", this.emails);

//     console.log("Object value (Cron config): ", this.cron);

//     console.log(
//       "Object value with Class Injection token (EnvConfig): ",
//       this.config
//     );

//     console.log("Inside [UsersController]");

//     console.log("Database connection", this.dbConn);

//     console.log(`[UsersController]:`, this.store.getStore());
//   }

//   @Post()
//   createUser(@Body() createUserDto: CreateUserDTO) {
//     return this.usersService.createUser(createUserDto);
//   }

//   @Get()
//   findAllUsers() {
//     return this.usersService.findUsers();
//   }

//   @Get(":id")
//   findUserById(@Param("id") id: number) {
//     return this.usersService.findUser(+id);
//   }

//   @Put(":id")
//   updateUser(@Param("id") id: number, @Body() updateUserDto: CreateUserDTO) {
//     return this.usersService.updateUser(+id, updateUserDto);
//   }

//   @Delete(":id")
//   deleteUser(@Param("id") id: number) {
//     return this.usersService.deleteUser(+id);
//   }

 
//   @Get("/profile")    
//      getProfile(@Req() req:Request ){
//       // console.log(req) 
//        return of({
//         hello: "Shahrukh"
//        });
//   }

//   // @Post("/profile")
//   // @Redirect("/users/account")  
//   // @HttpCode(HttpStatus.NO_CONTENT)
//   //    postProfile(@Req() req:Request, @Res() res:Response ){           
//   //     res.status(200); 
//   //     return {
//   //       url: "/users/account"
//   //      };
//   // }

//   // @Get("/account")
//   // redirectRoute() {
//   //   return 'Working Account'
//   // }

//   // @Post("/videos")
//   // addvideos(@Body() requestData: Record<string, any>){
//   //   console.log(requestData)
//   //   return {
//   //     success: true
//   //   }
//   // }

//   // @Post()
//   // createUser(@Body() createUserDto: CreateUserDTO) {
//   //   USERS.push(createUserDto);
//   //   return { message: "User created" };
//   // }

//   // @Get()
//   // findAllUsers() {
//   //   return USERS;
//   // }

//   // @Get(":id")
//   // findUserById(@Param("id") id: number) {
//   //   const user = USERS.find((user) => user.id === +id);

//   //   if (!user) {
//   //     return { message: "User not found" };
//   //   }

//   //   return user;
//   // }

//   // @Put(":id")
//   // updateUser(@Param("id") id: number, @Body() updateUserDto: CreateUserDTO): { message: string; } {
//   //   const userIdx = USERS.findIndex((user) => user.id === +id);

//   //   if (!userIdx) {
//   //     return { message: "User not found" };
//   //   }

//   //   USERS[userIdx] = updateUserDto;

//   //   return { message: "User updated" };
//   // }

//   // @Delete(":id")
//   // deleteUser(@Param("id") id: number) {
//   //   USERS = USERS.filter((user) => user.id !== +id);

//   //   return { message: "User deleted" };
//   // }
// }
