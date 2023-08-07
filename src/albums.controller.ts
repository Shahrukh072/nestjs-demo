import { Controller, Get, Req } from '@nestjs/common';
import { of } from 'rxjs';
import { Request } from 'express';


@Controller("/albums")
export class AlbumsController {
 
  @Get("/profile")
     getProfile(@Req() req:Request ){       
       return of({
        hello: "Photo"
       });
  }
}
