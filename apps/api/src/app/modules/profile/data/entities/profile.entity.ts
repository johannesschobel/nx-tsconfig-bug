import { Account } from '../../../account/data/entities/account.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';

@Entity('profiles')
export class Profile {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    firstname: string;
    @Column()
    lastname: string;

    @OneToOne(type => Account, account => account.profile)
    account: Account;
}