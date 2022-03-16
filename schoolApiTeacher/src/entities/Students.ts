import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn  } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('students')
export class Students{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: String

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date;
    
}
