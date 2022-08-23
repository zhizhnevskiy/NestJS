import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
import { RolesService } from '../roles/roles.service';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private roleService: RolesService,
  ) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    const role = await this.roleService.getRoleByValue('ADMIN');
    if (user && role) {
      await user.$set('roles', [role.id]);
      user.roles = [role];
      return user;
    } else {
      throw new NotFoundException('User or Role not Found');
    }
  }

  getAllUsers() {
    const user = this.userRepository.findAll({ include: { all: true } });
    if (!user) {
      throw new NotFoundException('Users not found');
    }
    return user;
  }

  getUserByEmail(email: string) {
    const user = this.userRepository.findOne({
      where: { email },
      include: { all: true },
    });
    return user;
  }

  async addRole(dto: AddRoleDto): Promise<User> {
    const [user, role] = await Promise.all([
      this.userRepository.findByPk(dto.userId),
      this.roleService.getRoleByValue(dto.value),
    ]);
    if (!role || !user) throw new NotFoundException('User or role not found');

    await user.$add('role', role.id);
    return user;
  }

  async ban(dto: BanUserDto) {
    const user = await this.userRepository.findByPk(dto.userId);
    if (user) {
      user.banned = true;
      user.banReason = dto.banReason;
      await user.save();
      return user;
    }
    throw new NotFoundException('Users not found');
  }
}
