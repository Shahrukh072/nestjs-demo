import {
  Controller,
  Get,
  Req,
  HttpCode,
  HttpStatus,
  Res,
  Post, 
  Redirect,
  Param,
  Body,
  Put,
  Delete, 
} from '@nestjs/common';
import { of } from 'rxjs';
import { Request,Response } from 'express';
import { request } from 'http';
import { CreateUserDTO } from './dto';

let USERS = [];
@Controller("/users")
export class usersController {
 
  @Get("/profile")    
     getProfile(@Req() req:Request ){
      // console.log(req) 
       return of({
        hello: "Shahrukh"
       });
  }

  @Post("/profile")
  @Redirect("/users/account")  
  @HttpCode(HttpStatus.NO_CONTENT)
     postProfile(@Req() req:Request, @Res() res:Response ){           
      res.status(200); 
      return {
        url: "/users/account"
       };
  }

  @Get("/account")
  redirectRoute() {
    return 'Working Account'
  }

  @Post("/videos")
  addvideos(@Body() requestData: Record<string, any>){
    console.log(requestData)
    return {
      success: true
    }
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDTO) {
    USERS.push(createUserDto);
    return { message: "User created" };
  }

  @Get()
  findAllUsers() {
    return USERS;
  }

  @Get(":id")
  findUserById(@Param("id") id: number) {
    const user = USERS.find((user) => user.id === +id);

    if (!user) {
      return { message: "User not found" };
    }

    return user;
  }

  @Put(":id")
  updateUser(@Param("id") id: number, @Body() updateUserDto: CreateUserDTO): { message: string; } {
    const userIdx = USERS.findIndex((user) => user.id === +id);

    if (!userIdx) {
      return { message: "User not found" };
    }

    USERS[userIdx] = updateUserDto;

    return { message: "User updated" };
  }

  @Delete(":id")
  deleteUser(@Param("id") id: number) {
    USERS = USERS.filter((user) => user.id !== +id);

    return { message: "User deleted" };
  }
}
