import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryColumn } from 'typeorm';


@Entity({ name: 'user_settings' })
@ObjectType()
export class UserSetting {

  @PrimaryColumn()
  @Field
    ((type) => Int)
  userId: number;

  @Column()
  @Field({ defaultValue: false })
  receiveNotifications: boolean;

  @Column()
  @Field({ defaultValue: false })
  receiveEmailNotifications: boolean;
}
