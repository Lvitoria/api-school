import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, JoinColumn, ManyToOne  } from 'typeorm'
import { Students } from './Students';

@Entity('grades')
export class Grades{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    idstudent: number;

    @JoinColumn({ name: "idstudent" })
    @ManyToOne(() => Students)
    student: Students;
    

    @Column()
    n1: number
    
    @Column()
    n2: number
    
    @Column()
    n3: number
    
    @Column()
    n4: number

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date;
    
}
