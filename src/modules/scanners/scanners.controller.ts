import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateScannerDto } from './dtos/create-scanner.dto';
import { ScannersService } from './scanners.service';
import { UpdateScannerDto } from './dtos/update.scanner.dto';

@Controller('scanners')
export class ScannersController {
  constructor(private scannersService: ScannersService) {}

  @Post()
  createScanner(@Body() body: CreateScannerDto) {
    return this.scannersService.createScanner(body);
  }

  @Get()
  getScanner(@Query('name') name: string) {
    return this.scannersService.getScanner(name);
  }

  @Put()
  updateScanner(@Body() updateScannerDto: UpdateScannerDto) {
    const { name, ...args } = updateScannerDto;
    return this.scannersService.updateScanner(name, args);
  }

  @Delete()
  deleteScanner(@Body('name') name: string) {
    return this.scannersService.deleteScanner(name);
  }
}
