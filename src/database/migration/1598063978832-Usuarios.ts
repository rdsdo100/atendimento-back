import {MigrationInterface, QueryRunner} from "typeorm";

export class Usuarios1598063978832 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
      
      create table usuarios (
                          id serial  not null primary key,
                          nome_usuario varchar not null unique,
                          matricula_usuario varchar unique,
                          email varchar not null unique,
                          senha varchar not null,
                          bloqueio_usuario  boolean default false not null,
                          tipo_usuarios_id_fk integer ,
                          constraint usuarios_tipo_usuarios foreign key (tipo_usuarios_id_fk) references usuarios(id)

      );
      
      `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`
        ALTER TABLE usuarios DROP CONSTRAINT usuarios_tipo_usuarios`
        );
        await queryRunner.query(
            `DROP TABLE usuarios`
        );




    }




}
