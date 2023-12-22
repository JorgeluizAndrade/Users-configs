import { Module } from '@nestjs/common';
import { UserResolver } from './UserResolver';
import { UserService } from './UserService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/graphql/models/User';
import { UserSettingsService } from './UserSettingsService';
import { UserSettingsRevolver } from 'src/graphql/resolvers/UserSettingsRevolver';
import { UserSetting } from 'src/graphql/models/UserSetting';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserSetting])],
  providers: [
    UserResolver,
    UserService,
    UserSettingsService,
    UserSettingsRevolver
  ],
})
export class UserModule {}
