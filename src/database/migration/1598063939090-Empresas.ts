import {MigrationInterface, QueryRunner} from "typeorm";

export class Empresas1598063939090 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
      create table empresas (
                          id serial  not null primary key,
                          cod_empresa varchar not null unique,
                          razao_empresa    varchar not null,
                          fantasia_empresa varchar not null,
                          grupo_empressa_id_fk int,
                          constraint empresas_grupo_empressa foreign key (grupo_empressa_id_fk) references grupo_empressas (id)
);
      
      `);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`
        ALTER TABLE empresas DROP CONSTRAINT  empresas_grupo_empressa`
        );
        await queryRunner.query(
            `DROP TABLE empresas`
        );


    }

}
