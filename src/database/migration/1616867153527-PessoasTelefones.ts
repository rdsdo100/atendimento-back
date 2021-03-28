import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class PessoasTelefones1616867153527 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: 'pessoas_telefones',
                columns:[
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },

                    {
                        name: 'pessoass_id_fk',
                        type: 'int',
                    },

                    {
                        name: 'telefones_id_fk',
                        type: 'int',
                    },
                ]
                
            })
        )

        await queryRunner.createForeignKey(
            'pessoas_telefones',
            new TableForeignKey({
                columnNames: ['pessoass_id_fk'],
                referencedColumnNames: ['id'],
                referencedTableName: 'contatos_pessoas',
                name: 'contatos_pessoas_pessoas_telefones',
            }),
        );

        await queryRunner.createForeignKey(
            'pessoas_telefones',
            new TableForeignKey({
                columnNames: ['telefones_id_fk'],
                referencedColumnNames: ['id'],
                referencedTableName: 'contatos_telefones',
                name: 'contatos_telefones_pessoas_telefones',
            }),
        );


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
