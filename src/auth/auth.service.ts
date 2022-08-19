import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { User } from '../users/users.model';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwsService: JwtService,
  ) {}

  async login(userDto: CreateUserDto) {
    const user = await this.usersService.getUserByEmail(userDto.email);
    if (!user) {
      throw new UnauthorizedException({ message: 'Email not found' });
    }

    const passwordEquals = await bcrypt.compare(
      userDto.password,
      user.password,
    );
    if (!passwordEquals) {
      throw new UnauthorizedException({ message: 'Password not correct' });
    }

    return this.generateToken(user);
  }

  async registration(userDto: CreateUserDto) {
    const candidate = await this.usersService.getUserByEmail(userDto.email);

    if (candidate) {
      throw new HttpException(
        'This email already existing',
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashPassword = await bcrypt.hash(userDto.password, 5);

    const user = await this.usersService.createUser({
      ...userDto,
      password: hashPassword,
    });

    return this.generateToken(user);
  }

  private async generateToken(user: User) {
    const payload = {
      email: user.email,
      id: user.id,
      roles: user.roles,
    };
    return {
      token: this.jwsService.sign(payload),
    };
  }
}
