import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class Atendimentos1614646653281 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: 'atendimentos',
                columns:[
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },

                    {
                        name: 'descricao_atendimento',
                        type: 'varchar',
                        length: '500',
                        isNullable: false,

                    },
                    {
                        name: 'data_atendimento',
                        type: 'date',
                        isNullable: false,

                    },


                    {
                        name: 'usuarios_id_fk',
                        type: 'int',
                    },
                    {
                        name: 'empresas_id_fk',
                        type: 'int',
                    },
                ]
                
            })
        )

        await queryRunner.createForeignKey(
            'atendimentos',
            new TableForeignKey({
                columnNames: ['usuarios_id_fk'],
                referencedColumnNames: ['id'],
                referencedTableName: 'usuarios',
                name: 'atendimentos_usuarios',
            }),
        );
        await queryRunner.createForeignKey(
            'atendimentos',
            new TableForeignKey({
                columnNames: ['empresas_id_fk'],
                referencedColumnNames: ['id'],
                referencedTableName: 'empresas',
                name: 'empresas_usuarios',
            }),
        );



    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
