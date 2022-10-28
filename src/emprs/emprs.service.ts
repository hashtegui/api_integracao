import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmprDto } from './dto/create-empr.dto';
import { UpdateEmprDto } from './dto/update-empr.dto';
import { Empr } from './entities/empr.entity';

@Injectable()
export class EmprsService {
  constructor(@InjectRepository(Empr, 'test') private repo: Repository<Empr>) {}

  findAll(): Promise<Empr[]> {
    return this.repo.find();
  }

  async findOne(id: number) {
    const user = this.repo.findOne({ where: { matricula: id } });
    const { password } = await user;
    console.log(password);
    const pass = await this.repo
      .createQueryBuilder('user')
      .select(`decrypt('${password}', '2115')`)
      .where('user.MATRICULA=:id', { id })
      .getRawOne();
    console.log(pass);
    return user;
  }
}
