import { Controller, Get, Param } from '@nestjs/common';

@Controller('/Output')
export class ParamController {
  @Get('/video/:id/:name')
  getparam(@Param() params: Record<string, any>) {
    console.log(params);
    return 'successs';
  }
}
