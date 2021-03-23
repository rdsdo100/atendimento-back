import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

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
                        isNullable: false
                    
                    },

                    {
                        name: 'nome_empresa',
                        type: 'varchar',
                        length: '250',
                        isNullable: false
                        
                    },
                    {
                        name: 'grupo_empresas_id_fk',
                        type: 'int',
                        default: 1
                    },
                ]
                
            })
        )

        await queryRunner.createForeignKey(
            'empresas',
            new TableForeignKey({
                columnNames: ['grupo_empresas_id_fk'],
                referencedColumnNames: ['id'],
                referencedTableName: 'grupo_empresas',
                name: 'usuarios_grupo_empresas',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
