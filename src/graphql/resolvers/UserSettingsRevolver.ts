import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserSetting } from '../models/UserSetting';
import { CreateUserSettingsInput } from '../utils/CreateUserSettingsInput';
import { UserSettingsService } from 'src/users/UserSettingsService';

@Resolver()
export class UserSettingsRevolver {
  constructor(private userSettingService: UserSettingsService) { }

  @Mutation((returns) => UserSetting)
  async createUserSettings(
    @Args('createUserSettingsData')
    createUserSettingsData: CreateUserSettingsInput,
  ) {

    const userSetting = await this.userSettingService.createUserSettings(
      createUserSettingsData
    )

    return userSetting
  }
}
