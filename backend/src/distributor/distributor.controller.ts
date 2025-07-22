import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { DistributorService } from './distributor.service';
import { JwtGuard } from 'src/auth/jwt.guard';
import { CreateDistributorDto } from './dtos/create.distributor.dto';

@Controller('distributor')
@UseGuards(JwtGuard)
export class DistributorController {
  constructor(private readonly distributorService: DistributorService) {}

  @Post('create')
  createDistributor(@Body() createDistributorDto: CreateDistributorDto) {
    return this.distributorService.createDistributor(createDistributorDto);
  }
}
