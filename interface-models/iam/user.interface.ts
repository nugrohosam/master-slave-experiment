import { IBaseEntity } from 'interface-models/base-entity.interface';

export interface IUser extends IBaseEntity {
    id?: number;

    fullname: string;

    email: string;

    password: string;
}
