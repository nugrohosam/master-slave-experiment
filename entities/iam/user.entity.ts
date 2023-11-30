import { IUser } from 'interface-models/iam/user.interface';
import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Exclude, Transform } from 'class-transformer';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'users' })
export class User extends BaseEntity implements IUser {
    @PrimaryGeneratedColumn({ name: 'id' })
    id: number;

    @Column()
    fullname: string;

    @Column({ name: 'phone_number', nullable: true }) 
    phoneNumber: string;

    @Column({ unique: true, nullable: true })
    email: string;
    
    @Column()
    @Exclude()
    password: string;
}
