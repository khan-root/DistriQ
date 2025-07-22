import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateDistributorDto } from './dtos/create.distributor.dto';
import { Model } from 'mongoose';
import { Distributor, DistributorDocument } from './schema/distributor.schema';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/user/schema/user.schema';
import { UserDocument } from 'src/user/schema/user.schema';

@Injectable()
export class DistributorService {
  constructor(
    @InjectModel(Distributor.name)
    private readonly distributorModel: Model<DistributorDocument>,
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  async createDistributor(
    createDistributorDto: CreateDistributorDto,
  ): Promise<{ message: string; data: DistributorDocument }> {
    const findDistributor = await this.distributorModel.findOne({
      user: createDistributorDto.user,
    });

    if (findDistributor) {
      throw new BadRequestException('Distributor already exists');
    }
    const findInUser = await this.userModel.findOne({
      _id: createDistributorDto.user,
    });

    if (!findInUser) {
      throw new BadRequestException('User not found');
    }

    const newDistributor = new this.distributorModel(createDistributorDto);
    await newDistributor.save();

    return {
      message: 'Distributor created successfully',
      data: newDistributor,
    };

    // const distributor = new this.distributorModel(createDistributorDto);
    // return distributor.save();
  }
}
