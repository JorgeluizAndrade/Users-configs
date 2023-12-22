import {
  Resolver,
  Query,
  Args,
  Int,
  ResolveField,
  Parent,
  Mutation
} from '@nestjs/graphql';
import { User } from 'src/graphql/models/User';
import { mockUsers } from 'src/__mocks__/mockUser';
import { UserSetting } from 'src/graphql/models/UserSetting';
import { mockUserSettings } from 'src/__mocks__/mockUserSettings';
import { CreateUserInput } from 'src/graphql/utils/CreateUserInput';
import { Inject } from '@nestjs/common';
import { UserService } from './UserService';


export let incrementId = 7;

@Resolver((of) => User)
export class UserResolver {
  constructor(
    private userService: UserService
  ) {}

  @Query(() => [User])
  getUsers() {
    return mockUsers;
  }

  @Query((returns) => User, { nullable: true })
  getUserById(@Args('id', { type: () => Int }) id: number) {
    return this.getUserById(id)
  }

  @ResolveField((returns) => UserSetting, { name: 'settings', nullable: true })
  getUserSettings(@Parent() user: User) {
    return mockUserSettings.find((setting) => setting.userId === user.id);
  }


  @Mutation((returns) => User)
  createUser(@Args('createUserData') createUserData: CreateUserInput) {
    return this.userService.createUser(createUserData)
  }

}
