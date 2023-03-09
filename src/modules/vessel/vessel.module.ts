import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Body, BodySchema } from '../../core/schemas/body.schema';
import { VesselService } from './vessel.service';
import { VesselController } from './vessel.controller';
import { Thruster, ThrusterSchema } from '../../core/schemas/thruster.schema';
import { FuelTank, FuelTankSchema } from '../../core/schemas/fuel-tanks.schema';
import { Scanner, ScannerSchema } from '../../core/schemas/scanner.schema';
import { VesselProvider } from './vessel.provider';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Body.name, schema: BodySchema },
      { name: Thruster.name, schema: ThrusterSchema },
      { name: FuelTank.name, schema: FuelTankSchema },
      { name: Scanner.name, schema: ScannerSchema },
    ]),
  ],
  controllers: [VesselController],
  providers: [VesselService, VesselProvider],
  exports: [VesselService],
})
export class VesselModule {}
