import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Seeder } from 'nestjs-seeder';
import { Scanner, ScannerDocument } from '../../core/schemas/scanner.schema';

const data: Scanner[] = [
  {
    name: 'Visor S',
    vendor: 'BluTek',
    type: 'Scout',
    weight: 1,
    price: 25,
  },
  {
    name: 'SEE-1',
    vendor: 'Kroeger',
    type: 'Scout',
    weight: 1,
    price: 23,
  },
  {
    name: 'Visor X',
    vendor: 'BluTek',
    type: 'any',
    weight: 1,
    price: 29,
  },
  {
    name: 'SEE-3',
    vendor: 'Kroeger',
    type: 'Armada',
    weight: 1.2,
    price: 31,
  },
  {
    name: 'New Horizons-2',
    vendor: 'Zog & Mayer',
    type: 'Armada',
    weight: 1.25,
    price: 36,
  },
  {
    name: 'Visor NMR',
    vendor: 'BluTek',
    type: 'Armada',
    weight: 1.25,
    price: 40,
  },
  {
    name: 'Visor Quazar',
    vendor: 'BluTek',
    type: 'Armada',
    weight: 1.25,
    price: 45,
  },
];

@Injectable()
export class ScannersSeeder implements Seeder {
  constructor(
    @InjectModel(Scanner.name)
    private readonly scannerModel: Model<ScannerDocument>,
  ) {}

  async seed(): Promise<any> {
    return this.scannerModel.insertMany(data);
  }

  async drop(): Promise<any> {
    return this.scannerModel.deleteMany({});
  }
}
