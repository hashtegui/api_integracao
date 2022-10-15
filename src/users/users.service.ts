import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User, UserEntity } from './entities/user.entity';
import { NotFoundException } from '@nestjs/common/exceptions';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find({ relations: { group: true } });
  }

  findOne(id: string) {
    return this.userRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        group: true,
      },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOneBy({ id: id });
    if (!user) {
      throw new NotFoundException();
    }
    Object.assign(user, updateUserDto);
    await this.userRepository.save(user);
    return user;
  }

  async remove(id: string) {
    return await this.userRepository.delete({ id: id });
  }
}
