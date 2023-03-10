import { IUser } from 'src/interfaces/user/user.interface';
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('user')
export class UserEntity extends BaseEntity implements IUser {

    @PrimaryGeneratedColumn() 
    id: string;
    
    @Column({
        length: 50,
        nullable: true,
        default: null
    })
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
    
    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
    updatedAt: Date;
}
