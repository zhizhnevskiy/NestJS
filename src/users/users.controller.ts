import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../auth/roles-auth.decorator';
import { RolesGuard } from '../auth/roles.guard';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';
import { ValidationPipe } from '../pipes/validation.pipe';

@ApiTags('Users')
@UseGuards(RolesGuard, JwtAuthGuard)
@UsePipes(new ValidationPipe())
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: 'Get all users' })
  @Roles('ADMIN')
  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }

  @ApiOperation({ summary: 'Add role for user' })
  @Roles('ADMIN')
  @Post('/role')
  addRole(@Body() roleDto: AddRoleDto) {
    return this.usersService.addRole(roleDto);
  }

  @ApiOperation({ summary: 'Ban user' })
  @Roles('ADMIN')
  @Post('/ban')
  ban(@Body() banDto: BanUserDto) {
    return this.usersService.ban(banDto);
  }
}
