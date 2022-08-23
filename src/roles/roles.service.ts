import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import {CreateRoleDto} from './dto/create-role.dto';
import {Role} from './roles.model';
import {InjectModel} from '@nestjs/sequelize';

@Injectable()
export class RolesService {
    constructor(@InjectModel(Role) private roleRepository: typeof Role) {
    }

    async createRole(dto: CreateRoleDto) {
        try {
            return await this.roleRepository.create(dto);
        } catch (e) {
            throw new BadRequestException('Role can not be added');
        }
    }

    getRoleByValue(roleValue: string) {
        const role = this.roleRepository.findOne({
            where: {value: roleValue},
        });
        if (!role) {
            throw new NotFoundException('Role not found');
        }
        return role;
    }
}
