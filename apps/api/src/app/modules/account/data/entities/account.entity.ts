import { Profile } from '../../../profile/data/entities/profile.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';

@Entity('accounts')
export class Account {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;
    @Column()
    password: string;

    @OneToOne(type => Profile, profile => profile.account)    
    @JoinColumn()
    profile: Profile;
}