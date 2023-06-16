import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('/input')
export class QueryController {
  @Get('/picture')
  getparam(@Query() query: Record<string, any>) {
    console.log(query);
    return 'successs';
  }
}
