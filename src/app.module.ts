import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BodyModule } from './modules/body/body.module';
import { ScannersModule } from './modules/scanners/scanners.module';
import { ThrustersModule } from './modules/thrusters/thrusters.module';
import { FuelTanksModule } from './modules/fuel-tanks/fuel-tanks.module';
import { VesselModule } from './modules/vessel/vessel.module';
import { CONFIG } from './core/config/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(CONFIG.MONGO_DB.URL),
    BodyModule,
    ScannersModule,
    ThrustersModule,
    FuelTanksModule,
    VesselModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
