import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class TipoEquipe1600782693500 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
        
        
        name: 'tipo_equipe',
        columns:[
            {
                name: 'id',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
            },
            {
                name: 'nome_equipe',
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
