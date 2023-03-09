import { Injectable } from '@nestjs/common';
import { TypeModule } from '../../core/enums/types-module.enum';
import { Aggregate, Model } from 'mongoose';

@Injectable()
export class VesselProvider {
  constructor() {}

  async getPartByType(
    type: TypeModule,
    model: Model<any>,
  ): Promise<Aggregate<Array<Model<any>>>> {
    return model.aggregate([
      {
        $match: {
          $or: [{ type: type }, { type: TypeModule.ANY }],
        },
      },
    ]);
  }
}
