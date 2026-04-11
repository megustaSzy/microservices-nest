import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBarangDto } from './dto/create-barang.dto';
import { UpdateBarangDto } from './dto/update-barang.dto';
import { PrismaService } from '../prisma.service';
import { metadata } from 'reflect-metadata/no-conflict';

@Injectable()
export class BarangService {
  constructor(private readonly prisma: PrismaService) {}
  create(createBarangDto: CreateBarangDto) {
    return 'This action adds a new barang';
  }

  async findAll() {
    const data = await this.prisma.barang.findMany();

    if (data.length === 0) {
      throw new NotFoundException({
        success: false,
        message: process.env.NOT_FOUND_BARANG,
        metadata: {
          status: HttpStatus.NOT_FOUND,
          total_data: data.length,
        },
      });
    }

    return {
      success: true,
      message: 'Data Barang Tidak Ditemukan',
      metadata: {
        status: HttpStatus.OK,
        total_data: data.length,
      },
      data: data,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} barang`;
  }

  update(id: number, updateBarangDto: UpdateBarangDto) {
    return `This action updates a #${id} barang`;
  }

  remove(id: number) {
    return `This action removes a #${id} barang`;
  }
}
