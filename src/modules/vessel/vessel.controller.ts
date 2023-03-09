import { Controller, Get, Query } from '@nestjs/common';
import { IVesselConfigsResponse, VesselService } from './vessel.service';
import { GetVesselConfigDto } from './dtos/get-vessel-config.dto';

@Controller()
export class VesselController {
  constructor(private vesselService: VesselService) {}

  @Get('getVesselConfigs')
  async getVesselConfigs(
    @Query() query: GetVesselConfigDto,
  ): Promise<IVesselConfigsResponse[]> {
    const { max_price, journey_distance, max_weight } = query;
    return this.vesselService.getVesselConfigs(
      max_price,
      journey_distance,
      max_weight,
    );
  }
}
