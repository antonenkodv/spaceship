import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Seeder } from 'nestjs-seeder';
import { Body, BodyDocument } from '../../core/schemas/body.schema';

const data: Body[] = [
  {
    name: 'K-8',
    vendor: 'Kroeger',
    type: 'Scout',
    bodyMaterial: 30,
    maxStorage: 10,
    weight: 40,
    price: 300,
  },
  {
    name: 'K-22M',
    vendor: 'Kroeger',
    type: 'Scout',
    bodyMaterial: 52.5,
    maxStorage: 20,
    weight: 72.5,
    price: 420,
  },
  {
    name: 'Zenith One',
    vendor: 'Ultron Tech',
    type: 'Armada',
    bodyMaterial: 75,
    maxStorage: 31,
    weight: 106,
    price: 550,
  },
  {
    name: 'Ghost',
    vendor: 'Nova Aerospace',
    type: 'Armada',
    bodyMaterial: 91,
    maxStorage: 37,
    weight: 128,
    price: 800,
  },
  {
    name: 'Admiral',
    vendor: 'Ultron Tech',
    type: 'Armada',
    bodyMaterial: 112,
    maxStorage: 45,
    weight: 157,
    price: 950,
  },
  {
    name: 'Admiral 2',
    vendor: 'Ultron Tech',
    type: 'Armada',
    bodyMaterial: 120,
    maxStorage: 50,
    weight: 170,
    price: 1100,
  },
];

@Injectable()
export class BodySeeder implements Seeder {
  constructor(
    @InjectModel(Body.name) private readonly bodyModel: Model<BodyDocument>,
  ) {}

  async seed(): Promise<any> {
    return this.bodyModel.insertMany(data);
  }

  async drop(): Promise<any> {
    return this.bodyModel.deleteMany({});
  }
}
