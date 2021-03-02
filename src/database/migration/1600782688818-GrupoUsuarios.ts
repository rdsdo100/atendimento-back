import {Column, MigrationInterface, QueryRunner, Table} from "typeorm";

export class GrupoUsuarios1600782688818 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.createTable(
            new Table({
name: 'grupo_usuarios',
columns: [
    {
        name: 'id',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
    },
    {
        name: 'nome',
        type: 'varchar',
        length: '50',
        isNullable: false,
        isUnique: true,
    },
]

            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
       

    }

}
