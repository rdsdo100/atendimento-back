import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Empresas1614646616511 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: 'empresas',
                columns:[
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },

                    {
                        name: 'codigo_empresa',
                        type: 'varchar',
                        length: '10',
                        isNullable: false,
                        isUnique: false,
                    },

                    {
                        name: 'nome_empresa',
                        type: 'varchar',
                        length: '250',
                        isNullable: false,
                        isUnique: false,
                    },
                ]
                
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
