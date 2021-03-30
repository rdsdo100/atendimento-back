import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class ContatosTelefones1616867134819 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: 'contatos_telefones',
                columns:[
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'dd',
                        type: 'varchar',
                        length: '3',
                        isNullable: false,

                    },

                    {
                        name: 'telefone',
                        type: 'varchar',
                        length: '12',
                        isNullable: false,

                    },
                    {
                        name: 'descricao',
                        type: 'varchar',
                        length: '70',
                        isNullable: false,

                    }
                ]
                
            })
        )


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
