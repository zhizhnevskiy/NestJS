import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {CreateRoleDto} from './dto/create-role.dto';
import {Role} from './roles.model';
import {InjectModel} from '@nestjs/sequelize';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private roleRepository: typeof Role) {}

  async createRole(dto: CreateRoleDto) {
    try {
      return await this.roleRepository.create(dto);
    } catch (e) {
      throw new HttpException('Role can not be added', HttpStatus.BAD_REQUEST);
    }
  }

  async getRoleByValue(value: string) {
    const role = await this.roleRepository.findOne({ where: { value } });
    return role;
  }
}
