import { HealthCheckModule } from '@kiwi-lib/nestjs';
import { Module } from '@nestjs/common';

@Module({
	imports: [HealthCheckModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
