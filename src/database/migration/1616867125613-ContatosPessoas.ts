import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class ContatosPessoas1616867125613 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {


        await queryRunner.createTable(
            new Table({
                name: 'contatos_pessoas',
                columns:[
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
                        length: '150',
                        isNullable: false,

                    },
                    {
                        name: 'Cargo',
                        type: 'varchar',
                        length: '150',
                        isNullable: false,

                    },

                    {
                        name: 'empresas_id_fk',
                        type: 'int',
                    },
                ]
                
            })
        )

        await queryRunner.createForeignKey(
            'contatos_pessoas',
            new TableForeignKey({
                columnNames: ['empresas_id_fk'],
                referencedColumnNames: ['id'],
                referencedTableName: 'empresas',
                name: 'empresas_empresas',
            }),
        );
       


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
