import {MigrationInterface, QueryRunner} from "typeorm";

export class Empresas1598063939090 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
      create table empresas (
                          id serial  not null primary key,
                          cod_empresa varchar not null unique,
                          razao_empresa    varchar not null,
                          fantasia_empresa varchar not null
);
      
      `);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(
            `DROP TABLE empresas`
        );


    }

}
