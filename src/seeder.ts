import { seeder } from 'nestjs-seeder';
import { MongooseModule } from '@nestjs/mongoose';
import { BodySeeder } from './seeds/body/body.seeder';
import { Body, BodySchema } from './core/schemas/body.schema';
import { Thruster, ThrusterSchema } from './core/schemas/thruster.schema';
import { FuelTank, FuelTankSchema } from './core/schemas/fuel-tanks.schema';
import { Scanner, ScannerSchema } from './core/schemas/scanner.schema';
import { ThrustersSeeder } from './seeds/thrusters/thrusters.seeder';
import { FuelTanksSeeder } from './seeds/fuel-tanks/fuel-tanks.seeder';
import { ScannersSeeder } from './seeds/scanners/scanners.seeder';
import { CONFIG } from './core/config/config';

seeder({
  imports: [
    MongooseModule.forRoot(CONFIG.MONGO_DB.URL),
    MongooseModule.forFeature([
      { name: Body.name, schema: BodySchema },
      { name: Thruster.name, schema: ThrusterSchema },
      { name: FuelTank.name, schema: FuelTankSchema },
      { name: Scanner.name, schema: ScannerSchema },
    ]),
  ],
}).run([BodySeeder, ThrustersSeeder, FuelTanksSeeder, ScannersSeeder]);
