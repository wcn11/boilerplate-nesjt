
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('roles')
export class RoleEntity extends BaseEntity{

    @PrimaryGeneratedColumn() 
    id: string;
    
    @Column({
        length: 50,
        nullable: true,
        default: null
    })
    name: string;
}
