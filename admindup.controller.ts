import { Controller, Get, Request } from '@nestjs/common';

@Controller('/admin1')
export class AdminControllerdup {
  @Get()
  getAdmin() {
    return {
      name: 'shafin',
      id: 2000,
    };
  }
}
