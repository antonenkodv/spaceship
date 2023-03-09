import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Seeder } from 'nestjs-seeder';
import {
  FuelTank,
  FuelTankDocument,
} from '../../core/schemas/fuel-tanks.schema';

const data: FuelTank[] = [
  {
    name: 'Little Guy',
    vendor: 'Kroeger',
    type: 'Scout',
    fuelCapacity: 18,
    weight: 20,
    price: 20,
  },
  {
    name: 'Big Guy',
    vendor: 'Kroeger',
    type: 'any',
    fuelCapacity: 32,
    weight: 35,
    price: 50,
  },
  {
    name: 'Model A',
    vendor: 'Zog & Mayer',
    type: 'Scout',
    fuelCapacity: 25,
    weight: 27.2,
    price: 50,
  },
  {
    name: 'Model A+',
    vendor: 'Zog & Mayer',
    type: 'any',
    fuelCapacity: 50,
    weight: 53.5,
    price: 90,
  },
  {
    name: 'Model M',
    vendor: 'Zog & Mayer',
    type: 'Armada',
    fuelCapacity: 120,
    weight: 132,
    price: 100,
  },
  {
    name: 'Model Z',
    vendor: 'Zog & Mayer',
    type: 'Armada',
    fuelCapacity: 150,
    weight: 160,
    price: 105,
  },
  {
    name: 'The Gigant',
    vendor: 'Kroeger',
    type: 'Armada',
    fuelCapacity: 250,
    weight: 270,
    price: 125,
  },
];

@Injectable()
export class FuelTanksSeeder implements Seeder {
  constructor(
    @InjectModel(FuelTank.name)
    private readonly fuelTanksModel: Model<FuelTankDocument>,
  ) {}

  async seed(): Promise<any> {
    return this.fuelTanksModel.insertMany(data);
  }

  async drop(): Promise<any> {
    return this.fuelTanksModel.deleteMany({});
  }
}
