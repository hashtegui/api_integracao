import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  create(createUserDto: CreateUserDto, groupId: number) {
    const user = this.userRepository.create({
      ...createUserDto,
      group: { id: groupId },
    });
    return this.userRepository.save(user);
  }

  findAll(): Promise<UserEntity[]> {
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

  async update(id: string, updateUserDto: UpdateUserDto, groupId: number) {
    const user = await this.userRepository.findOne({
      where: { id: id },
      relations: ['group'],
    });
    if (!user) {
      throw new HttpException(
        'User with this id does not exists',
        HttpStatus.NOT_FOUND,
      );
    }
    Object.assign(user, updateUserDto);
    user.group.id = groupId;
    await this.userRepository.save(user);
    return await this.userRepository.findOne({
      where: { id: user.id },
      relations: ['group'],
    });
  }

  async remove(id: string) {
    return await this.userRepository.delete({ id: id });
  }
}
