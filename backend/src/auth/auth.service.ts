import { BadRequestException, Injectable } from '@nestjs/common';
import { RegisterDto } from './dtos/register.dto';
import { LoginDto } from './dtos/login.dto';

@Injectable()
export class AuthService {
  async register(registerDto: RegisterDto) {
    try {
      console.log(registerDto);
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }

  async login(loginDto: LoginDto) {
    try {
      console.log(loginDto);
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }
}
