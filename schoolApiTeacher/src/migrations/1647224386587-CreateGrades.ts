import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateGrades1647224386587 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'grades',
                columns: [
                    {
                        name: 'id',
                        type: 'bigInt',
                        generationStrategy: "increment",
                        isPrimary: true,
                        isUnique: true
                    },
                    {
                        name: 'idstudent',
                        type: 'bigInt'
                    },
                    {
                        name: 'n1',
                        type: 'integer'
                    },
                    {
                        name: 'n2',
                        type: 'integer'
                    },
                    {
                        name: 'n3',
                        type: 'integer'
                    },
                    {
                        name: 'n4',
                        type: 'integer'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],
                foreignKeys:[
                    {
                        name: "FKStudent",
                        columnNames: ["idstudent"],
                        referencedTableName: "students",
                        referencedColumnNames: ["id"]
                    }
                ]

            }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('grades');
    }

}
