import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Body, BodyDocument } from '../../core/schemas/body.schema';
import { Model } from 'mongoose';
import { TypeModule } from '../../core/enums/types-module.enum';
import { VesselProvider } from './vessel.provider';
import { Thruster, ThrusterDocument } from '../../core/schemas/thruster.schema';
import { FuelTank, FuelTankDocument } from '../../core/schemas/fuel-tanks.schema';
import { Scanner, ScannerDocument } from '../../core/schemas/scanner.schema';

export interface IVesselConfigsResponse {
  price: number;
  journey_distance: number;
  body: Model<BodyDocument>;
  fuelTank: Model<FuelTankDocument>;
  scanner: Model<ScannerDocument>;
  thruster: Model<ThrusterDocument>;
}

@Injectable()
export class VesselService {
  private IONIC_FUEL = 43.29;

  constructor(
    @InjectModel(Body.name) private bodyModel: Model<BodyDocument>,
    @InjectModel(Thruster.name) private thrusterModel: Model<ThrusterDocument>,
    @InjectModel(FuelTank.name) private fuelTankModel: Model<FuelTankDocument>,
    @InjectModel(Scanner.name) private scannerModel: Model<ScannerDocument>,
    private vesselProvider: VesselProvider,
  ) {}

  async getVesselConfigs(
    max_price?: number,
    journey_distance?: number,
    max_weight?: number,
  ): Promise<IVesselConfigsResponse[]> {
    const [body, thrusters, fuelTanks, scanners] = await this.getAllParts(TypeModule.SCOUT);

    const configurations = [];

    // using nested loop
    for (let i = 0; i < body.length; i++) {
      for (let j = 0; j < scanners.length; j++) {
        for (let k = 0; k < fuelTanks.length; k++) {
          for (let l = 0; l < thrusters.length; l++) {

            const price =
              body[i].price +
              scanners[j].price +
              fuelTanks[k].price +
              thrusters[l].price;

            const totalWeight =
              body[i].weight +
              scanners[j].weight +
              fuelTanks[k].weight +
              thrusters[l].weight;

            const journeyDistance =
              (thrusters[l].efficiency *
                fuelTanks[j].fuelCapacity *
                this.IONIC_FUEL) / totalWeight;

            if (max_price < price ||
              journey_distance > journeyDistance ||
              max_weight < totalWeight) continue;

            configurations.push({
              price,
              journey_distance: journeyDistance,
              body: body[i],
              fuelTank: fuelTanks[j],
              scanner: scanners[k],
              thruster: thrusters[l],
            });
          }
        }
      }
    }
    return configurations.sort((a, b) => b.price - a.price).slice(0, 10);
  }

  async getAllParts(type: TypeModule): Promise<Awaited<any>[]> {
    const promises = [
      this.bodyModel,
      this.thrusterModel,
      this.fuelTankModel,
      this.scannerModel,
    ].map((model) => this.vesselProvider.getPartByType(type, model));
    return Promise.all(promises);
  }
}
