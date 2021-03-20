import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class GrupoEmpreasa1614646616500 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: 'grupo_empresas',
                columns:[
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },

                    {
                        name: 'grupo_empresa',
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
