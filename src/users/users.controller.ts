import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Put } from '@nestjs/common/decorators';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    const groupId = createUserDto.groupId;
    const user = createUserDto;
    delete user.groupId;

    return this.usersService.create(user, groupId);
  }

  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.usersService.findOne(id);
    if (!user) {
      throw new HttpException(
        'User with this id does not exists',
        HttpStatus.NOT_FOUND,
      );
    }
    return user;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const groupId = updateUserDto.groupId;
    const user = updateUserDto;
    delete user.groupId;
    return await this.usersService.update(id, updateUserDto, groupId);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const user = await this.usersService.remove(id);
    if (!user) {
      throw new HttpException(
        'User with this id does not exists',
        HttpStatus.NOT_FOUND,
      );
    }
    return user;
  }
}
