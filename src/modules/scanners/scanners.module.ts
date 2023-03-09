import { Module } from '@nestjs/common';
import { ScannersController } from './scanners.controller';
import { ScannersService } from './scanners.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Scanner, ScannerSchema } from '../../core/schemas/scanner.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Scanner.name, schema: ScannerSchema }]),
  ],
  providers: [ScannersService],
  controllers: [ScannersController],
})
export class ScannersModule {}
