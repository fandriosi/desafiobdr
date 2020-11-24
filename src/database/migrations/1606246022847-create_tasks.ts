import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTasks1606246022847 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'tasks',
            columns:[
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'descricao',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'userId',
                    type: 'uuid'
                },
                {
                    name: 'status',
                    type: 'varchar'
                },
                {
                    name: 'data_inicio',
                    type: 'timestamp'
                },
                {
                    name: 'data_finalizacao',
                    type: 'timestamp'
                },
                {
                    name: 'data_criacao',
                    type: 'timestamp'
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
