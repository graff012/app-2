import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post('create')
  async create(@Body() data: CreateBookDto) {
    return await this.booksService.create(data);
  }

  @Get()
  async findAll() {
    return await this.booksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.booksService.findOne(id);
  }
}
