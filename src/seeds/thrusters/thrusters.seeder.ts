import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Seeder } from 'nestjs-seeder';
import { Thruster, ThrusterDocument } from '../../core/schemas/thruster.schema';

const data: Thruster[] = [
  {
    name: 'W4SP',
    vendor: 'Nova Aerospace',
    type: 'Scout',
    efficiency: 0.2,
    weight: 3,
    price: 20,
  },
  {
    name: 'B33',
    vendor: 'Nova Aerospace',
    type: 'any',
    efficiency: 0.23,
    weight: 4.5,
    price: 50,
  },
  {
    name: 'IonFlo 3',
    vendor: 'BluTek',
    type: 'Scout',
    efficiency: 0.35,
    weight: 3.6,
    price: 50,
  },
  {
    name: 'V11',
    vendor: 'Kroeger',
    type: 'any',
    efficiency: 0.3,
    weight: 5.25,
    price: 90,
  },
  {
    name: 'Nitrino',
    vendor: 'Ultron Tech',
    type: 'Armada',
    efficiency: 0.5,
    weight: 9,
    price: 100,
  },
  {
    name: 'EMMA v4',
    vendor: 'Zog & Mayer',
    type: 'Armada',
    efficiency: 0.55,
    weight: 9.75,
    price: 105,
  },
  {
    name: 'Zonda X',
    vendor: 'Nova Aerospace',
    type: 'Armada',
    efficiency: 0.71,
    weight: 15,
    price: 155,
  },
];

@Injectable()
export class ThrustersSeeder implements Seeder {
  constructor(
    @InjectModel(Thruster.name)
    private readonly thrusterModel: Model<ThrusterDocument>,
  ) {}

  async seed(): Promise<any> {
    return this.thrusterModel.insertMany(data);
  }

  async drop(): Promise<any> {
    return this.thrusterModel.deleteMany({});
  }
}
