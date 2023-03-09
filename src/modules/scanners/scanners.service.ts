import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Scanner, ScannerDocument } from '../../core/schemas/scanner.schema';
import { CreateScannerDto } from './dtos/create-scanner.dto';
import { UpdateScannerDto } from './dtos/update.scanner.dto';

@Injectable()
export class ScannersService {
  constructor(
    @InjectModel(Scanner.name) private scannerModel: Model<ScannerDocument>,
  ) {}

  createScanner(dto: CreateScannerDto) {
    return new this.scannerModel(dto).save();
  }

  getScanner(name: string) {
    return this.scannerModel.findOne({ name });
  }

  updateScanner(name: string, data: Omit<UpdateScannerDto, 'name'>) {
    return this.scannerModel.updateOne({ name }, data);
  }

  deleteScanner(name: string) {
    return this.scannerModel.deleteOne({ name });
  }
}
