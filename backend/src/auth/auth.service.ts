import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RegisterDto } from './dtos/register.dto';
import { LoginDto } from './dtos/login.dto';
import { User, UserDocument } from 'src/user/schema/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private UserModel: Model<UserDocument>,
  ) {}

  async register(registerDto: RegisterDto): Promise<{ message: string }> {
    const { email, password } = registerDto;
    try {
      const findUser = await this.UserModel.findOne({
        email,
      });
      if (findUser) {
        throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
      }
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);
      const newUser = new this.UserModel({
        ...registerDto,
        password: hash,
      });
      await newUser.save();

      return { message: 'User Created Successfully' };
    } catch (error) {
      throw new BadRequestException((error as Error)?.message);
    }
  }

  async login(loginDto: LoginDto): Promise<User> {
    try {
      const { email, password } = loginDto;
      const user = await this.UserModel.findOne({ email });
      if (!user) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        throw new HttpException('Invalid password', HttpStatus.BAD_REQUEST);
      }

      return user;
    } catch (error) {
      throw new BadRequestException((error as Error)?.message);
    }
  }
}
