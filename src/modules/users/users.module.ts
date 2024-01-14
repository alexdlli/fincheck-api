import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AuthGuard } from '../auth/auth.guard';

@Module({
  controllers: [UsersController],
  providers: [UsersService, AuthGuard],
})
export class UsersModule {}
