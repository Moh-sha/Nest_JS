import { Controller, Get, Request } from '@nestjs/common';

@Controller('/shafin')
export class UserController {
  @Get('/shafin1')
  getUser(@Request() req) {
    console.log(req);
    return {
      name: 'konak',
      id: 2000,
    };
  }
}
