import { Expose } from "class-transformer";
import { IUser } from "src/interfaces/user/user.interface";
import { BaseEntity } from "./base.entity";

export const defaultUserGroupsForSerializing: string[] = ['user.timestamps']

export const extendedUserGroupsForSerializing: string[] = [...defaultUserGroupsForSerializing]

export const allUserGroupsForSerializing: string[] = [...extendedUserGroupsForSerializing, 'user.password']

export class UserEntity extends BaseEntity implements IUser {
    id: string;
    email: string;
    name: string | string;

    @Expose({
        groups: ['user.password']
    })
    password: string;

    @Expose({
        groups: ['user.timestamps']
    })
    createdAt: Date;

    @Expose({
        groups: ['user.timestamps']
    })
    updatedAt: Date;
    
}