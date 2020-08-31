import {MigrationInterface, QueryRunner} from "typeorm";

export class GrupoEmpressa1598063938090 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`
      create table grupo_empressas (
    id serial primary key ,
    nome_grupo varchar
);
      
      `);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `DROP TABLE grupo_empressa`
        );

    }

}
