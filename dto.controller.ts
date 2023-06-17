import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { userInfo } from 'os';
import { createDto } from './dto/create-user.dto';
const User = [];
@Controller('Add_admin')
export class dtocontroller {
  @Post()
  addUser(@Body() createUserDto: createDto) {
    User.push(createUserDto);

    console.log(createUserDto);
    return 'User added successfully';
  }

  @Get('/show')
  getuser() {
    return User;
  }

  @Get(':id')
  getusers(@Param('id') id: number) {
    const result = User.find((user) => user.id == +id);
    console.log(result);
    return 'success';
  }
}
