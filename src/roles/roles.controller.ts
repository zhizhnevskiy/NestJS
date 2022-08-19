import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './roles.model';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
  constructor(private roleService: RolesService) {}

  @ApiOperation({ summary: 'Create role' })
  @ApiResponse({ status: 200, type: Role })
  @Post()
  create(@Body() roleDto: CreateRoleDto) {
    return this.roleService.createRole(roleDto);
  }

  @ApiOperation({ summary: 'Get role' })
  @ApiResponse({ status: 200, type: Res })
  @Get(':value')
  async getByValue(@Param() params, @Res() res) {
    const role = await this.roleService.getRoleByValue(params.value);
    if (!role) {
      throw new HttpException('Role not found', HttpStatus.NOT_FOUND);
    }
    return res.status(HttpStatus.OK).json(role);
  }
}
