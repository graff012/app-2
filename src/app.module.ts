import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { BooksModule } from './modules/books/books.module';

@Module({
  imports: [BooksModule, CoreModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
