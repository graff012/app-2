import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/core/database/prisma.service';
import { throws } from 'assert';

@Injectable()
export class BooksService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createBookDto: CreateBookDto) {
    const newBook = await this.prisma.book.create({
      data: {
        name: createBookDto.name,
        author: createBookDto.author,
        page: createBookDto.page,
        price: createBookDto.price,
      },
    });

    return newBook;
  }

  async findAll() {
    return await this.prisma.book.findMany();
  }

  async findOne(id: number) {
    const book = await this.prisma.book.findUnique({
      where: { id },
    });

    if (!book) throw new NotFoundException('Book not found');

    return book;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
